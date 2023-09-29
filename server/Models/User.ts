import {AvatarClient, Avatar, Database, LoginValidation, RegisterValidation ,RandomString} from "./../importAll";

export default class User extends Database<IUserDB>{
        private username         :string  | null =null;  //{get;}                       
        private email            :string  | null =null;  //{get; set;}                   
        private firstName        :string  | null =null;  //{get; set;}                       
        private lastName         :string  | null =null;  //{get; set;}                       
        private birthday         :string  | null =null;  //{get; set;}                       
        private registerDate     :string  | null =null;  //{get;}                           
        private banned           :boolean | null =null;  //{get;}                   
        private freeze           :boolean | null =null;  //{get;}                   
        private token            :string  | null =null;  //{get;}            
        public  message          :ImessageUser  ={
             login:{username:'',password:'',status:''},
             register:{}
        };       
    
        private isExist            :boolean  = false; //{get;}         
        private isLogin            :boolean  = false; //{get;}         
        private isSelectedAvatar   :boolean  = false; //{get; set;}                     

        private avatars       : Avatar[]    =[] ; //{get;}
        private activeAvatar  : Avatar|null  ; //{get;}

        public  GetUsername         = ():string             => this.username         ;
        public  GetEmail            = ():string             => this.email            ;
        public  GetFirstName        = ():string             => this.firstName        ;
        public  GetLastName         = ():string             => this.lastName         ;
        public  GetBirthday         = ():string             => this.birthday         ;
        public  GetRegisterDate     = ():string             => this.registerDate     ;
        public  GetBanned           = ():boolean            => this.banned           ;
        public  GetFreeze           = ():boolean            => this.freeze           ;
        public  GetToken            = ():string             => this.token            ;
        public  GetAvatars          = ():Avatar[]           => this.avatars          ;
        public  GetActiveAvatar     = ():(Avatar|null)      => this.activeAvatar     ;
        public  IsExist             = ():boolean            => this.isExist          ;
        public  IsLogin             = ():boolean            => this.isLogin          ;
        public  IsSelectedAvatar    = ():boolean            => this.isSelectedAvatar ;
        public  setEmail            = (value:string) :void  => {this.email      = value}
        public  setFirstName        = (value:string) :void  => {this.firstName  = value}
        public  setLastName         = (value:string) :void  => {this.lastName   = value}
        public  setBirthday         = (value:string) :void  => {this.birthday   = value}
        public  setIsSelectedAvatar = (value:boolean):void  => {this.isSelectedAvatar = value}



    //#region Method
        public constructor(obj?:IUserDB,login =false){
            super({tableName:"users"})
            if(obj)
                for(let key in obj) 
                    this[key] = obj[key];
            this.isExist = this.username? true:false;
            login? this.ILogin() : this.isLogin=false;
        }
          
        private ILogin(){
            this .isLogin =  true;
            this.avatars = Avatar.GetAvatarsByUser(this);
        }

        public Logout():User{
            if(this.isLogin){
                this.removeToken();
                this.isLogin = false; 
            }
            return this; 
        }

        public Login(obj:ILogin):User{
            if(!this.isLogin){
                LoginValidation(obj).Valid(()=>{
                    this.SelectSync({
                        Fields: ["username","email","firstName","lastName","registerDate","birthday","freeze","token"],
                        where : `username ='${obj.username}' and password = '${obj.password}'`
                    })
                    .ValidDB<IUserDB[]>((data)=>{
                        for(let key in data[0])
                            this[key] = data[0][key]
                        this.isExist =  true;
                        this.isLogin =  true;
                        this.createToken();
                        this.avatars = Avatar.GetAvatarsByUser(this);
                    })
                    .NoValidDB(()=>{
                        this.isExist = false;
                        this.isLogin = false;
                        this.message.login = {status:"login no valid"}
                    })
                }).NoValid<ILoginMsgs>((msgs)=>this.message.login = {...msgs,status:"login no valid"})  
            }
            return this;
        }
        
        public Register(obj:IRegister):User{ 
            if(!this.isLogin){
                RegisterValidation(obj).Valid(()=>{
                    this.isExist = true;
                    this.isLogin = false;
                    this.username = obj.username;
                    this.QuerySync(`insert into users (username,password,email,firstName,lastName) Values ('${obj.username}','${obj.password}','${obj.email}','${obj.firstName}','${obj.lastName}')`)
                })
                .NoValid<IRegisterMsgs>(msg=>{
                    this.isExist = false;
                    this.isLogin = false;
                    this.message.register = {...msg,status:"register no valid"}; 
                })
            }
            return this;
        }

        public DeleteDB(){
            this.DeleteSync({where:`username='${this.username}'`})
            this.isExist = false;
        }

        private createToken(){
            if(this.isLogin){
                let token = RandomString(40)
                this.UpdateSync({update: {token:token} ,where:`username='${this.username}'`})
                this.token = token;
            }
        }

        private removeToken(){
            if(this.isExist){
                this.UpdateSync({update: {token:''}})
                this.token = null;
            }
        }

        public GetAvatarsClient():AvatarClient[]{
            return this.avatars.map(ava=>ava.GetModelClient());
        }

        public UpdateActiveAvatar(avatar:Avatar){
            if(!avatar){
                this.isSelectedAvatar = false;
                this.activeAvatar = null;
                return;
            }
            this.activeAvatar = this.avatars.find(a=>a.GetId()==avatar.GetId());
            this.isSelectedAvatar = this.activeAvatar? true : false;
        }


        public GetModelClient(){
            return{
                username    : this.username,
                email       : this.email,
                firstName   : this.firstName,
                lastName    : this.lastName,
                birthday    : this.birthday,
                registerDate: this.registerDate,
                token       : this.token,
            }
        }


        public canCreteNewAvatar():boolean{
            return true;  /// להשלים
        }


        public static getAllUsers():Promise<User[]> {
            return new Promise<User[]>((resolve,reject)=>{
                let user :User[]= []
                new Database().SelectSync<TUser>({
                    Fields:['username','email','firstName','lastName','birthday','registerDate','freeze','token'],
                    from:"users",
                    where:"1=1"
                }).ValidDB<IUserDB[]>(data => {
                    data.forEach(usr => user.push(new User(usr)));
                    resolve(user)
                })
                .NoValidDB(err=>reject(err))     
            })
        }

        public static getAllUsersSync(): User[] {
            let user:User[] = [];
            new Database().SelectSync<TUser>({
                Fields:['username','email','firstName','lastName','birthday','registerDate','freeze','token'],
                from:"users",
            })
            .ValidDB<IUserDB[]>(data=> data.forEach(u=>user.push(new User(u))))
            return user
        }
        

        public static GetUserByUsername(username:string):User{
            let user:User = null;
            new Database().SelectSync<TUser>({
                Fields:['username','email','firstName','lastName','birthday','registerDate','freeze','token'],
                from:"users",
                where : `username='${username}'`
            })
            .ValidDB<IUserDB[]>(data=> user=new User(data[0]))
            return user
        }
        public static GetUserByToken(token:string):User{
            let user:User = new User;
            if(!token) return user; 
            if(token.length <10) return user; 
            new Database().SelectSync<TUser>({
                Fields:['username','email','firstName','lastName','birthday','registerDate','freeze','token'],
                from:"users",
                where : `token='${token}'`
            })
            .ValidDB<IUserDB[]>(data=> user=new User(data[0],true))
            return user
        }
}
 


interface ImessageUser{
    login   : ILoginMsgs;
    register: IRegisterMsgs;
}