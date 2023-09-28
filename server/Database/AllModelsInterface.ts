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


interface IRankSettingDB{
    id?              :number;
    startExp?        :number;
    hp?              :number;
    energy?          :number;
    energyEnergy?    :number;
}   


interface IAvatarDB{
    id?              :number;
    name             :string;
    createdDate?     :string;
    freeze?          :boolean;
    exp?             :number;
    silver?          :number;
    gold?            :number;
    redPowder?       :number;
    diamond?         :number;
    userID?          :number;
    missionID?       :number;
    magicID?         :number;   
    gender?          :"boy"|"girl"|"all";
    mainPage ?       :AllMainPagesType;
    subPage  ?       :AllSubPagesType ;
    
}

interface ILevensDB{
    id?              :number;
    leven?           :number;
    startExp?        :number;
    hp?          :number;
    energy?          :number;
    refillEnergy?    :number;
    priceLevenUp     :IPrice;
}



interface ICardsDB{
   id?              :number;
   name?            :string;
   description?     :string;
   price?           :IPrice;
   move?            :IMove;
   attack?          :IAttack;
   upgrade?         :IUpgradeCard;
   stats?           :IStats;
   delay?           :number;
   minAvatarRank?   :number;
   freeze?          :boolean;
   maxUpgrade?      :number; 
   magicID?         :number;
   categoryCardID?    :number| ICategoryCards;
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
    rank?             :number;
    minAvatarRank?    :number;
    categoryItemID?   :number| ICategoryItems;
    magicID?          :number; 
    maxUpgrade?       :number; 
}



interface IMagicsDB{
    id?              :number;
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
    id?            :number;  
    name?          :string;      
}
interface ICategoryCards{
    id?            :number;  
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