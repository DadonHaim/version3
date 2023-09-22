import { AvatarsModel, Database, Inventory, Magic, User } from "./../importAll";

export default class Avatar extends Database<TAvatars>{ 
    //#region Fields
        private name        :string             |null           =null;    //{get;}
        private exp         :number             |null           =null;    //{get;}
        private silver      :number             |null           =null;    //{get;}
        private gold        :number             |null           =null;    //{get;}
        private redPowder   :number             |null           =null;    //{get;}
        private diamond     :number             |null           =null;    //{get;}
        private createdDate :string             |null           =null;    //{get;}
        private gender      :"boy"|"girl"|"all" |null           =null;    //{get;}
        private inventory   :Inventory          |null           =null; //לערוך


    //#endregion

    //#region Flags
        private isExist          :boolean           = false;   
        private isActive         :boolean           = false;   
        private isSelectMission  :boolean           = false;           
        private isFreeze         :boolean           = false;       
        private mainPage         :AllMainPagesType  = 'Game';   
        private subPage          :AllSubPagesType   = 'Guest-Home';   
    //#endregion

    //#region Refferences
        private user                :   User;   //{get;}   
        private activeMission       :   any; //  Mission;    //{get;}           
        private magic               :   Magic; //  Magic;      //{get;}     
        private page                :   any; //  Page;       //{get;}   
    //#endregion

    //#region Gets      
        public GetId            = ():number     => this.id           ;
        public GetName          = ():string     => this.name         ;
        public GetExp           = ():number     => this.exp          ;
        public GetSilver        = ():number     => this.silver       ;
        public GetGold          = ():number     => this.gold         ;
        public GetRedPowder     = ():number     => this.redPowder    ;
        public GetDiamond       = ():number     => this.diamond      ;
        public GetCreatedDate   = ():string     => this.createdDate  ;
        public GetInventory     = ():Inventory  => this.inventory    ;
        public GetUser          = ():User       => this.user         ;
        public GetActiveMission = ()            => this.activeMission;
        public GetMagic         = ():Magic      => this.magic        ;
        public GetPage          = ()            => this.page         ;
        public GetGender        = ()            => this.gender       ;
    //#endregion

    //#region Method
        public constructor(avatarObj?:AvatarsModel , user?:User){
            super({tableName:"avatars"})
            if(avatarObj){
                this.id          = avatarObj.id         ;
                this.name        = avatarObj.name       ;
                this.exp         = avatarObj.exp        ;
                this.silver      = avatarObj.silver     ;
                this.gold        = avatarObj.gold       ;
                this.redPowder   = avatarObj.redPowder  ;
                this.diamond     = avatarObj.diamond    ;
                this.createdDate = avatarObj.createdDate;
                this.inventory   = new Inventory(this)  ;
                this.isExist     = true                 ;
                this.magic       = Magic.GetMagicById(avatarObj.magicID);
                this.gender      = avatarObj.gender;
                this.mainPage     = avatarObj.mainPage; 
                this.subPage      = avatarObj.subPage; 
            }
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
    


    //#endregion

    //#region statics
    public static GetAvatarsByUserId(user:User):Avatar[]{
        let avatars:Avatar[] = [];
        new Database().SelectSync<TAvatars>({
            Fields  : ["id","name","userID","createdDate","exp","gold","gender" ,"mainPage" ,"subPage","silver","redPowder","diamond","freeze","magicID","missionID"],
            from    : "avatars",
            where   : `userID='${user.GetId()}'`
        })
        .ValidDB<AvatarsModel[]>(data =>{
            data.forEach((avatar)=>{
                avatars.push(new Avatar(avatar,user));
            })
        })
        .NoValidDB(err =>{})
        return avatars;
    }
  
    //#endregion

 }