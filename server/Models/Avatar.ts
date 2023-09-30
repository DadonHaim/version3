import { AvatarClient, Database, Item, Magic, User } from "./../importAll";

export default class Avatar extends Database<IAvatarDB>{
        private id          :number             |null           =null;    //{get;}                       
        private name        :string             |null           =null;    //{get;}
        private exp         :number             |null           =null;    //{get;}
        private hp          :number             |null           =null;    //{get;}
        private energy      :number             |null           =null;    //{get;}
        private refillEnergy:number             |null           =null;    //{get;}
        private silver      :number             |null           =null;    //{get;}
        private gold        :number             |null           =null;    //{get;}
        private redPowder   :number             |null           =null;    //{get;}
        private diamond     :number             |null           =null;    //{get;}
        private createdDate :string             |null           =null;    //{get;}
        private gender      :"boy"|"girl"|"all" |null           =null;    //{get;}
        
        private items       : Item[];

        private isExist          :boolean           = false;   
        private isActive         :boolean           = false;   
        private isSelectMission  :boolean           = false;           
        private isFreeze         :boolean           = false;       
        private mainPage         :AllMainPagesType  = 'Game';   
        private subPage          :AllSubPagesType   = 'Guest-Home';   

        private user             :   User;   //{get;}   
        private activeMission    :   any;  //  Mission;    //{get;}           
        private magic            :   Magic; //  Magic;      //{get;}     

        private hat     : Item;  //get; set;
        private shirt   : Item;  //get; set;
        private pants   : Item;  //get; set;
        private shoes   : Item;  //get; set;
        private weapon  : Item;  //get; set;


        public GetHat      = ():Item => this.hat    ;      
        public GetShirt    = ():Item => this.shirt  ;        
        public GetPants    = ():Item => this.pants  ;        
        public GetShoes    = ():Item => this.shoes  ;        
        public GetWeapon   = ():Item => this.weapon ;       
        public SetHat      = (value:Item) => this.hat    = value;      
        public SetShirt    = (value:Item) => this.shirt  = value;        
        public SetPants    = (value:Item) => this.pants  = value;        
        public SetShoes    = (value:Item) => this.shoes  = value;        
        public SetWeapon   = (value:Item) => this.weapon = value;       


        public GetId            = ():number           => this.id           ;
        public GetName          = ():string           => this.name         ;
        public GetExp           = ():number           => this.exp          ;
        public GetHp            = ():number           => this.hp           ;
        public GetSilver        = ():number           => this.silver       ;
        public GetEnergy        = ():number           => this.energy       ;
        public GetRefillEnergy  = ():number           => this.refillEnergy ;
        public GetGold          = ():number           => this.gold         ;
        public GetRedPowder     = ():number           => this.redPowder    ;
        public GetDiamond       = ():number           => this.diamond      ;
        public GetCreatedDate   = ():string           => this.createdDate  ;
        public GetUser          = ():User             => this.user         ;
        public GetActiveMission = ()                  => this.activeMission;
        public GetMagic         = ():Magic            => this.magic        ;
        public GetGender        = ()                  => this.gender       ;
        public GetmainPage      = ():AllMainPagesType => this.mainPage     ;
        public GetSubPage       = ():AllSubPagesType  => this.subPage      ;
        public GetItems         = ():Item[]           => this.items        ;




        public constructor(avatarObj:IAvatarDB,user?:User){
            super({tableName:"avatars"})
            for(let key in avatarObj)
                this[key] = avatarObj[key];
            if(user)
                this.user = user;
            this.getAllItems();
            this.getAllActiveItems();
        }

        private getAllItems():void{
            let items:Item[] = [];
            items      = Item.GetItemsByAvatarSync(this)
            this.items = items;
        }

        private getAllActiveItems():void{
            this.items.forEach(item=>{
                if(item.GetCategoryItem()=="hat" && item.IsActive()) 
                    this.hat = item;
                else if(item.GetCategoryItem()=="pants" && item.IsActive()) 
                    this.pants = item;
                else if(item.GetCategoryItem()=="shirt" && item.IsActive()) 
                    this.shirt = item;
                else if(item.GetCategoryItem()=="shoes" && item.IsActive()) 
                    this.shoes = item;
                else if(item.GetCategoryItem()=="weapon" && item.IsActive()) 
                    this.weapon = item;
            });
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
                    hp          :this.GetHp(),
                    energy      :this.GetEnergy(),
                    refillEnergy:this.GetRefillEnergy(),
                    gold        :this.GetGold(),
                    diamond     :this.GetDiamond(),
                    redPowder   :this.GetRedPowder(),
                    createdDate :this.GetCreatedDate(),
                    magicName   :(this.magic)?this.GetMagic().GetName() as MagicNameType : "fire",
                    gender      :this.gender,
                    mainPage    :this.mainPage,
                    subPage     :this.subPage,
                    hat         :this.hat?      this.hat.GetModelClient():null,
                    shirt       :this.shirt?    this.shirt.GetModelClient():null,
                    pants       :this.pants?    this.pants.GetModelClient():null,
                    shoes       :this.shoes?    this.shoes.GetModelClient():null,
                    weapon      :this.weapon?   this.weapon.GetModelClient():null,
                }
            );
            console.log(this.name , this.items)
            return result;
        }


    public static GetAvatarsByUser(user:User):Avatar[]{ 
        let avatars:Avatar[] = [];
        new Database().SelectSync({
            Fields  : ["id","name","username","createdDate","exp","gold","gender" ,"mainPage" ,"subPage","silver","redPowder","diamond","freeze","hp","energy","refillEnergy","magicName","missionID"],
            from    : "avatars",
            where   : `username='${user.GetUsername()}'`
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