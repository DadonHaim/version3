// import {Avatar, AvatarsItemsModel, Database, Magic} from "./../importAll";
// export default class Card extends Database<TCards>{
//     private id               :number  | null =null;  //{get;}                       
//     private name            :string        |null = null;    
//     private description     :string        |null = null;    
//     private type            :string        |null = null;    
//     private price           :IPrice        |null = null;    
//     private move            :IMove         |null = null;    
//     private attack          :IAttack       |null = null;    
//     private delay           :number        |null = null;    
//     private minAvatarRank   :number        |null = null;    
//     private rank            :number        |null = null;    
//     private upgrade         :IUpgradeCard  |null = null;            
//     private freeze          :boolean       |null = null;        
//     private isExist         :boolean       |null = null;        
//     private magic           :Magic         |null = null;    
//     private avatar          :Avatar        |null = null;    
//     private maxUpgrade      :number        |null = null;    
//     public GetId             = ():number       => this.id             ;
//     public GetName           = ():string       => this.name           ;
//     public GetDescription    = ():string       => this.description    ;
//     public GetType           = ():string       => this.type           ;
//     public GetPrice          = ():IPrice        => this.price          ;
//     public GetMove           = ():IMove         => this.move           ;
//     public GetAttack         = ():IAttack       => this.attack         ;
//     public GetDelay          = ():number       => this.delay          ;
//     public GetminAvatarRank  = ():number       => this.minAvatarRank   ;
//     public GetUpgrade        = ():IUpgradeCard => this.upgrade        ;
//     public IsFreeze          = ():boolean      => this.freeze         ;
//     public IsExist           = ():boolean      => this.isExist        ;
//     public GetMagic          = ():Magic        => this.magic          ;
//     public GetRank           = ():number       => this.rank           ;
//     public GetAvatar         = ():IAttack       => this.avatar         ;
//     public GetMaxUpgrade     = ():number      => this.maxUpgrade     ;
//     public constructor(obj?:ICardsDB , avatar?:Avatar){
//         super({tableName:"cards"})
//         if(obj)
//             for(let key in obj)
//                 this[key] = obj[key];
//         if(avatar)
//             this.SelectSync({
//                 Fields : ["rank"],
//                 from   : "avatars_cards",
//                 where  : `cardID = ${this.id} and avatarID=${avatar.GetId()}`
//             })
//             .ValidDB(data=>{
//                 this.avatar = avatar;
//                 this.rank = data[0].rank;
//             })
//             .NoValidDB(()=>{
//                 this.avatar = null;
//             })
//     }
//     public RankUp(num:number = 1){
//         if(!this.avatar||!this.id) return;
//         if(this.rank < this.maxUpgrade){
//             this.rank +=num;
//             this.Update<AvatarsItemsModel>({
//                 update:{rank:this.rank},
//                 from:"avatars_cards",
//                 where:`cardID=${this.id} and avatarID=${this.avatar.GetId()}`
//             })
//         }
//     }
//     public static GetAllcardsByAvatar(avatar:Avatar) : Promise<Card[]>{
//         return new Promise((resolve,reject)=>{
//             let cards : Card[] = [];
//             new Database().SelectSync<TCards>({
//                 Fields : ["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//                 And    : ["active"],
//                 from   : "cards",
//                 where  : `id = ${avatar.GetId()}`,
//                 join   : "avatars_cards",
//                 on     : `avatars_cards.avatarID = ${avatar.GetId()} and avatars_cards.CardID = cards.id`
//             })
//             .ValidDB<ICardsDB[]>(data=>{
//                 data.forEach(card =>cards.push(new Card(card)));
//                 resolve(cards)
//             })
//         })
//     }
//     public static GetCardById(CardID:number):Card{
//         let cards: Card = null;
//         new Database().SelectSync<TCards>({
//             Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//             from: 'cards',
//             where :`id = ${CardID}`
//         })
//         .ValidDB<ICardsDB[]>(data => cards= new Card(data[0]))
//         return cards;
//     }
//     public static GetCardByName(CardName:string):Card{
//         let cards: Card = null;
//         new Database().SelectSync<TCards>({
//             Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//             from: 'cards',
//             where :`name = ${CardName}`
//         })
//         .ValidDB<ICardsDB[]>(data => cards= new Card(data[0]))
//         return cards;
//     }
//     public static GetCardsByAvatar(avatar:Avatar):Promise<Card[]>{
//         return new Promise((resolve,reject)=>{
//             let cards :Card[] =[];
//             new Database().SelectSync<TCards>({ 
//                 Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//                 from:"cards",
//                 join:"avatars_cards",
//                 on: `avatars_cards.avatarID = ${avatar.GetId()}`,
//             }).ValidDB<ICardsDB[]>(data=>{
//                 data.forEach(card=> cards.push(new Card(card)))
//                 resolve(cards)
//             })
//         })
//     }
//     public static GetCardsByAvatarSync(avatar:Avatar):Card[]{
//         let cards :Card[] = [];
//         new Database().SelectSync<TCards>({
//             Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//             from:"cards",
//             join:"avatars_cards",
//             on: `avatars_cards.avatarID = ${avatar.GetId()}`,
//         })
//         .ValidDB<ICardsDB[]>(data=>{
//             data.forEach(i => cards.push(new Card(i)))
//         })
//         return cards;
//     }
//     public static GetCardsByMagic(magic:Magic):Promise<Card[]>{
//         return new Promise((resolve,reject)=>{
//             let cards :Card[] = [];
//             new Database().SelectSync<TCards>({
//                 Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//                 from:"cards",
//                 where:`magicID=${magic.GetId()}`
//             })
//             .ValidDB<ICardsDB[]>(data=>{
//                 data.forEach(i => cards.push(new Card(i)))
//                 resolve(cards)
//             })
//         })
//     }
//     public static GetCardsByMagicSync(magic:Magic):Card[]{
//         let cards :Card[] = [];
//         new Database().SelectSync<TCards>({
//             Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//             from:"cards",
//             where:`magicID=${magic.GetId()}`
//         })
//         .ValidDB<ICardsDB[]>(data=>{
//             data.forEach(i => cards.push(new Card(i)))
//         })
//         return cards;
//     }
//     public static GetCardsByType(type:string):Promise<Card[]>{
//         return new Promise((resolve,reject)=>{
//             let cards :Card[] = [];
//             new Database().SelectSync<TCards>({
//                 Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//                 from:"cards",
//                 where:`type=${type}`
//             })
//             .ValidDB<ICardsDB[]>(data=>{
//                 data.forEach(i => cards.push(new Card(i)))
//                 resolve(cards)
//             })
//         })
//     }
//     public static GetCardsByTypeSync(type:string):Card[]{
//         let cards :Card[] = [];
//         new Database().SelectSync<TCards>({
//             Fields:["id","name","description","freeze","attack","delay","magicID","move","price","type","upgrade","minAvatarRank","maxUpgrade"],
//             from:"cards",
//             where:`type=${type}`
//         })
//         .ValidDB<ICardsDB[]>(data=>{
//             data.forEach(i => cards.push(new Card(i)))
//         })
//         return cards;
//     }
// }
//# sourceMappingURL=Card.js.map