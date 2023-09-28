import { AvatarClient, Database, Magic, User } from "./../importAll";

export default class Avatar extends Database<IAvatarDB>{
        private id          :number             |null           =null;  //{get;}                       
        private name        :string             |null           =null;    //{get;}
        private exp         :number             |null           =null;    //{get;}
        private silver      :number             |null           =null;    //{get;}
        private gold        :number             |null           =null;    //{get;}
        private redPowder   :number             |null           =null;    //{get;}
        private diamond     :number             |null           =null;    //{get;}
        private createdDate :string             |null           =null;    //{get;}
        private gender      :"boy"|"girl"|"all" |null           =null;    //{get;}

        private isExist          :boolean           = false;   
        private isActive         :boolean           = false;   
        private isSelectMission  :boolean           = false;           
        private isFreeze         :boolean           = false;       
        private mainPage         :AllMainPagesType  = 'Game';   
        private subPage          :AllSubPagesType   = 'Guest-Home';   

        private user             :   User;   //{get;}   
        private activeMission    :   any;  //  Mission;    //{get;}           
        private magic            :   Magic; //  Magic;      //{get;}     

        public GetId            = ():number           => this.id           ;
        public GetName          = ():string           => this.name         ;
        public GetExp           = ():number           => this.exp          ;
        public GetSilver        = ():number           => this.silver       ;
        public GetGold          = ():number           => this.gold         ;
        public GetRedPowder     = ():number           => this.redPowder    ;
        public GetDiamond       = ():number           => this.diamond      ;
        public GetCreatedDate   = ():string           => this.createdDate  ;
        public GetUser          = ():User             => this.user         ;
        public GetActiveMission = ()                  => this.activeMission;
        public GetMagic         = ():Magic            => this.magic        ;
        public GetGender        = ()                  => this.gender       ;
        public GetmainPage      = ():AllMainPagesType => this.mainPage     ;
        public GetsubPage       = ():AllSubPagesType  => this.subPage      ;


        public constructor(avatarObj:IAvatarDB,user?:User){
            super({tableName:"avatars"})
            for(let key in avatarObj)
                this[key] = avatarObj[key];
            if(user)
                this.user = user;
        }

  
        public EnterToActiveAvatar(){
            if(!this.isExist) return;
            this.user.UpdateActiveAvatar(this);
            this.isActive = true;
        }
    
        public OutFromActiveAvatar(){
            if(!this.isExist) return;
            this.user.UpdateActiveAvatar(null);
            this.isActive = false;
        }
    

        public GetModelClient():AvatarClient{
            let result :AvatarClient = new AvatarClient(
                {
                    id          :this.GetId(),
                    name        :this.GetName(),
                    exp         :this.GetExp(),
                    silver      :this.GetSilver(),
                    gold        :this.GetGold(),
                    diamond     :this.GetDiamond(),
                    redPowder   :this.GetRedPowder(),
                    createdDate :this.GetCreatedDate(),
                    magicName   :(this.magic)?this.GetMagic().GetName() as MagicNameType : "fire",
                    gender      :this.gender,
                    mainPage    :this.mainPage,
                    subPage     :this.subPage,
                }
            );
            return result;
        }


    public static GetAvatarsByUserId(user:User):Avatar[]{
        let avatars:Avatar[] = [];
        new Database().SelectSync<TAvatars>({
            Fields  : ["id","name","userID","createdDate","exp","gold","gender" ,"mainPage" ,"subPage","silver","redPowder","diamond","freeze","magicID","missionID"],
            from    : "avatars",
            where   : `userID='${user.GetId()}'`
        })
        .ValidDB<IAvatarDB[]>(data =>{
            data.forEach((avatar)=>{
                avatars.push(new Avatar(avatar,user));
            })
        })
        .NoValidDB(err =>{})
        return avatars;
    }
    
 }  