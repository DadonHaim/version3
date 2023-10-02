import { Avatar, Database, ItemClient, Magic } from "./../importAll";

export default class Item extends Database<IItemsDB>{
        private id               :number        |null = null;  //{get;}                       
        private name            : string        |null  = null;   
        private description     : string        |null  = null;   
        private freeze          : boolean|number|null  = null;   
        private price           : IPrice        |null  = null;   
        private sale            : ISale         |null  = null;   
        private stats           : IStats        |null  = null;
        private upgrade         : IUpgradeItem  |null  = null;   
        private categoryItemName : CategoryItemsType|null  = null;   
        private rank            : number        |null  = null;   
        private minAvatarRank   : number        |null  = null;       
        private maxUpgrade      : number        |null  = null;       
        private gender          : IGender        |null  = null;
    
        private isExist  :boolean = false;
        private isActive :boolean = false;
        
        private magic        : Magic;
        private avatar       : Avatar;


        public GetId              = ():number               => this.id              ;
        public GetName            = ():string               => this.name            ;
        public GetDescription     = ():string               => this.description     ;
        public GetGender          = ():string               => this.gender          ;
        public GetFreeze          = ():boolean|number       => this.freeze          ;
        public GetPrice           = ():IPrice               => this.price           ;
        public GetSale            = ():ISale                => this.sale            ;
        public GetStats           = ():IStats               => this.stats           ;
        public GetUpgrade         = ():IUpgradeItem         => this.upgrade         ;
        public GetCategoryItem    = ():CategoryItemsType    => this.categoryItemName    ;
        public GetRank            = ():number               => this.rank            ;
        public GetminAvatarRank   = ():number               => this.minAvatarRank  ;
        public GetAvatar          = ():Avatar               => this.avatar          ;
        public GetMagic           = ():Magic                => this.magic           ;
        public GetMaxUpgrade      = ():number               => this.maxUpgrade      ;
        public IsExist            = ():boolean              => this.isExist         ;
        public IsActive           = ():boolean              => this.isActive        ;



    public RankUp(num:number = 1){
        if(!this.avatar||!this.id) return;
        if(this.rank < this.maxUpgrade){
            this.rank +=num;
            this.Update({
                update:{rank:this.rank},
                from:"avatars_items",
                where:`itemID=${this.id} and avatarID=${this.avatar.GetId() ||0}`
            })
        }
    }

        public constructor(obj?:IItemsDB, avatar?:Avatar){
            super({tableName:"items"});

            if(obj){
                for(let key in obj)
                    this[key] = obj[key];
                if(obj.magicName)
                    this.magic = Magic.GetMagicByName(obj.magicName)
            }
            if(avatar)
                this.SelectSync({
                    Fields : ["rank","active"],
                    from   : "avatars_items",
                    where  : `itemID = ${this.id} and avatarID=${avatar.GetId() ||0}`
                })
                .ValidDB(data=>{
                    this.avatar   = avatar;
                    this.rank     = data[0].rank;
                    this.isActive = data[0].active;
                })
                .NoValidDB(()=>{
                    this.avatar = null;
                })
        }

        
 
        public GetModelClient():ItemClient{
            return new ItemClient({
                id           : this.id              ,               
                name         : this.name            ,                 
                description  : this.description     ,              
                price        : this.price           ,                
                sale         : this.sale            ,                 
                stats        : this.stats           ,                
                upgrade      : this.upgrade         ,              
                categoryItem : this.categoryItemName,                 
                rank         : this.rank            ,                 
                maxUpgrade   : this.maxUpgrade      ,               
                gender       : this.gender          ,               
                isActive     : this.isActive        ,                 
                magic        : this.magic.GetName() ,                
            })
        }


        public static getAllItemsByAvatar(avatar:Avatar) : Promise<Item[]>{
            return new Promise((resolve,reject)=>{
                let items : Item[] = [];
                new Database().SelectSync<any>({
                    Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                    And    : ["active"],
                    from   : "items",
                    where  : `id = ${avatar.GetId() ||0}`,
                    join   : "avatars_items",
                    on     : `avatars_items.avatarID = ${avatar.GetId() ||0} and avatars_items.itemID = items.id`
                })
                .ValidDB<IItemsDB[]>(data=>{
                    data.forEach(item =>items.push(new Item(item)));
                    resolve(items)
                })
            })
        }
        public static GetItemById(itemID:number):Item{
            let item: Item = null;
            new Database().SelectSync<any>({
                Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from: 'items',
                where :`id = ${itemID}`
            })
            .ValidDB<IItemsDB[]>(data => item = new Item(data[0]))
            return item;
        }
        public static GetItemByName(itemName:string):Item{
            let item: Item = null;
            new Database().SelectSync<any>({
                Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from: 'items',
                where :`name = ${itemName}`
            })
            .ValidDB<IItemsDB[]>(data => item = new Item(data[0]))
            return item;
        }
        public static GetItemsByAvatar(avatar:Avatar):Promise<Item[]>{
            return new Promise((resolve,reject)=>{
                let items :Item[] =[];
                new Database().SelectSync<any>({ 
                    Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                    from:"items",
                    join:"avatars_items",
                    on: `avatars_items.avatarID = ${avatar.GetId() ||0}`,
                }).ValidDB<IItemsDB[]>(data=>{
                    data.forEach(item=> items.push(new Item(item)))
                    resolve(items)
                })
            })
        }

        public static GetItemsByAvatarSync(avatar:Avatar):Item[]{
            let items :Item[] = [];
            new Database().SelectSync({
                Fields: ["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                And   : ["isActive"],
                from  : "items",
                join  : "avatars_items",
                on    : `avatars_items.itemID = items.id and avatars_items.avatarID = ${avatar.GetId()} `,
            })
            .ValidDB<IItemsDB[]>(data=>{
                data.forEach(i => items.push(new Item(i)))
            })
            return items;
        }
        public static GetItemsByMagic(magic:Magic):Promise<Item[]>{
            return new Promise((resolve,reject)=>{
                let items :Item[] = [];
                new Database().SelectSync<any>({
                    Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                    from:"items",
                    where:`magicName=${magic.GetName()}`
                })
                .ValidDB<IItemsDB[]>(data=>{
                    data.forEach(i => items.push(new Item(i)))
                    resolve(items)
                })
            })
        }
        public static GetItemsByMagicSync(magic:Magic):Item[]{
            let items :Item[] = [];
            new Database().SelectSync<any>({
                Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from:"items",
                where:`magicName=${magic.GetName()}`
            })
            .ValidDB<IItemsDB[]>(data=>{
                data.forEach(i => items.push(new Item(i)))
            })
            return items;
        }
        public static GetItemsByType(type:string):Promise<Item[]>{
            return new Promise((resolve,reject)=>{
                let items :Item[] = [];
                new Database().SelectSync<any>({
                    Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                    from:"items",
                    where:`type=${type}`
                })
                .ValidDB<IItemsDB[]>(data=>{
                    data.forEach(i => items.push(new Item(i)))
                    resolve(items)
                }) 
            })
        }
        public static GetItemsByTypeSync(type:string):Item[]{
            let items :Item[] = [];
            new Database().SelectSync<any>({
                Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from:"items",
                where:`type=${type}`
            })
            .ValidDB<IItemsDB[]>(data=>{
                data.forEach(i => items.push(new Item(i)))
            })
            return items;
        }


        public static GetStartItems():Item[]{
            let items :Item[] = [];
            new Database().SelectSync<any>({
                Fields:["id","name","description","freeze","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from:"items",
                where:`startItem = 1`
            })
            .ValidDB<IItemsDB[]>(data=>{
                data.forEach(i => items.push(new Item(i)))
            })
            return items;
        }


        public static GetStartItemsClient():ItemClient[]{
            let items :ItemClient[] = [];
            new Database().SelectSync<any>({
                Fields:["id","name","description","gender","price","stats","sale","upgrade","categoryItemName","minAvatarRank","maxUpgrade","magicName"],
                from:"items",
                where:`startItem = 1`
            })
            .ValidDB<IItemsDB[]>(data=>{
                data.forEach(i => items.push(new ItemClient({
                    id           : i.id,
                    name         : i.name,
                    description  : i.description,
                    price        : i.price,
                    sale         : i.sale,
                    stats        : i.stats,
                    upgrade      : i.upgrade,
                    categoryItem : i.categoryItemName as CategoryItemsType,
                    rank         : 0,
                    maxUpgrade   : 1,
                    gender       : i.gender=="boy"?
                                        "boy"  :  
                                                i.gender=="girl"? "girl" :"all",
                    magic        : i.magicName,
                })))
            })
            return items;
        }

}
