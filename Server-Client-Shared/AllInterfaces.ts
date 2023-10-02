//Server//Client
const _ItemClient = require("./ModelsClient/ItemClient");


interface IAction<T=any>{
    payload : T
}

interface IAvatarCreate{
    name    : string;
    gender : "boy"|"girl";
    hat    : typeof _ItemClient;
    shirt  : typeof _ItemClient;
    shoes  : typeof _ItemClient;
    pants  : typeof _ItemClient;
    weapon : typeof _ItemClient;
}
interface IAvatarCreateMsgs{
    name? :string;
    gender? :string;
}

interface IRegister{
    username    : string,
    password    : string,
    email       : string,
    firstName?  : string,
    lastName?   : string,
}

interface ILogin{
    username : string,
    password : string,
}

interface ILoginMsgs {
    username ? : string;
    password ? : string;
    status   ? : string;
}
  
interface IRegisterMsgs{
    username    ?: string;
    password    ?: string;
    email       ?: string;
    firstName   ?: string;
    lastName    ?: string;
    status      ?: string;
}

interface IUserDB{
    id?           : number;
    username      : string;
    password      : string;
    email         : string;
    firstName?    : string;
    lastName?     : string;
    birthday?     : string;
    registerDate? : string;
    freeze?       : boolean;
    banned?       : boolean;
    token?        : string;
}


interface ILevenDB{//exist in Server-Client-Shared
    level?           :number;
    startExp?        :number;
    hp?              :number;
    energy?          :number; 
    energyEnergy?    :number;  
    prizeLevenUp?    :IPrize;    
}    
interface IGlobalSettings{//exist in Server-Client-Shared
    gameName        ?:string;            
    description     ?:string;       
    enablePvp       ?:boolean;           
    avatarsPerUser  ?:number;         
    maxUpgrade      ?:number;        
}
interface IClientSettings{  //exist in Server-Client-Shared
    CONTAINER_APP_GRID         ?:string;                       
    GUEST_HEADER_POSITION      ?:string;                        
    GUEST_MENU_POSITION        ?:string;                      
    GUEST_MAIN_POSITION        ?:string;                      
    GUEST_FOOTER_POSITION      ?:string;                        
    GUEST_COPYRIGHT_POSITION   ?:string;                         
    AVATAR_VIEW_GRID           ?:string;                         
    GIRL_AVATAR_BODY_POSITION  ?:string;                        
    GIRL_HAT_POSITION          ?:string;                      
    GIRL_SHIRT_POSITION        ?:string;                      
    GIRL_SHOES_POSITION        ?:string;                      
    GIRL_PANTS_POSITION        ?:string;                      
    BOY_AVATAR_BODY_POSITION   ?:string;                         
    BOY_HAT_POSITION           ?:string;                       
    BOY_SHIRT_POSITION         ?:string;                       
    BOY_SHOES_POSITION         ?:string;                       
    BOY_PANTS_POSITION         ?:string;                            
}



interface IAvatarDB{
    id?              :number;
    magicName?       :string;   
    name             :string;
    gender?          :"boy"|"girl"|"all";
    createdDate?     :string;
    freeze?          :boolean;
    exp?             :number;
    silver?          :number;
    gold?            :number;
    redPowder?       :number;
    diamond?         :number;
    missionName?     :number;
    username?        :string;
    mainPage ?       :AllMainPagesType;
    subPage  ?       :AllSubPagesType ;
    
}



interface ICardsDB{
   id?                 :number;
   name?               :string;
   description?        :string;
   price?              :IPrice;
   move?               :IMove;
   attack?             :IAttack;
   upgrade?            :IUpgradeCard;
   stats?              :IStats;
   delay?              :number;
   minAvatarRank?      :number;
   freeze?             :boolean;
   maxUpgrade?         :number; 
   magicName?          :number;
   categoryCardName?   :number| ICategoryCards;
}




interface IItemsDB{
    id?               :number;
    name?             :string;
    description?      :string;
    freeze?           :boolean;
    price?            :IPrice;
    sale?             :ISale;
    color?            :string;
    upgrade?          :IUpgradeItem;
    stats?            :IStats;
    gender?           :"boy" | "girl";
    rank?             :number;
    minAvatarRank?    :number;
    categoryItemName?   :string| ICategoryItems;
    magicName?          :MagicNameType; 
    maxUpgrade?       :number; 
}



interface IMagicsDB{
    name?            :string;
    description?     :string;
    freeze?          :boolean;
}


interface IMoney{
    silver      ? :number;
    gold        ? :number;
    redPowder   ? :number;
    diamond     ? :number;
    exp         ? :number;
}

interface IPrice{
    silver      ? :number;
    gold        ? :number;
    redPowder   ? :number;
    diamond     ? :number;
}
interface ISale{
    Level1  : IMoney;
    Level2  : IMoney;
    Level3  : IMoney;
    Level4  : IMoney;
    Level5  : IMoney;
    Level6  : IMoney;
    Level7  : IMoney;
    Level8  : IMoney;
    Level9  : IMoney;
    Level10 : IMoney;
}
interface IStats{
    hp           ? :number;
    damage       ? :number;
    energy       ? :number;
    refillEnergy ? :number;
}

interface IPrize{
    items       ? :IItemsDB[];
    cards       ? :ICardsDB[];
    silver      ? :number;
    gold        ? :number;
    redPowder   ? :number;
    diamond     ? :number;
    exp         ? :number;
}

interface IMove{
    up     :number;  
    down   :number;  
    left   :number;  
    right  :number;      
}
interface IAttack{

}


interface IUpgradeCard{
    Level1  : {price:IPrice,stats:IStats};
    Level2  : {price:IPrice,stats:IStats};
    Level3  : {price:IPrice,stats:IStats};
    Level4  : {price:IPrice,stats:IStats};
    Level5  : {price:IPrice,stats:IStats};
    Level6  : {price:IPrice,stats:IStats};
    Level7  : {price:IPrice,stats:IStats};
    Level8  : {price:IPrice,stats:IStats};
    Level9  : {price:IPrice,stats:IStats};
    Level10 : {price:IPrice,stats:IStats};
}
interface IUpgradeItem{
    Level1  : {price:IPrice,stats:IStats};
    Level2  : {price:IPrice,stats:IStats};
    Level3  : {price:IPrice,stats:IStats};
    Level4  : {price:IPrice,stats:IStats};
    Level5  : {price:IPrice,stats:IStats};
    Level6  : {price:IPrice,stats:IStats};
    Level7  : {price:IPrice,stats:IStats};
    Level8  : {price:IPrice,stats:IStats};
    Level9  : {price:IPrice,stats:IStats};
    Level10 : {price:IPrice,stats:IStats};
}


interface ICategoryItems{
    name?          :string;      
}
interface ICategoryCards{
    name?          :string;     
}










/*
export default class MonsterRankPower{
    public addPerRank   :_monsterRankPower; 
    public simple       :_monsterRankPower; 
    public general      :_monsterRankPower; 
    public king         :_monsterRankPower; 
    constructor(jsonText:string){}

}

class _monsterRankPower{
    public hp           :number;
    public energy       :number;
    public refillEnergy :number;
}

export default class Labyrinth{
    public frame : _labyrinth[];
    constructor(jsonText:string){}

 }
 
 
 class _labyrinth{
     public monsterData  :{
         monster : any; // Monster,
         rank : number,  
         type : string
     };    
     public mission : boolean;
     public treasure : boolean;
     public prize :{
        exp        :number,         
        silver     :number,     
        gold       :number, 
        diamond    :number,     
        redPowder  :number,         
        items      :any, //Item[],  
     }
 }

*/