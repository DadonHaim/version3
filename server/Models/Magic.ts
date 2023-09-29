import { Database, ResultSql } from "./../importAll";

export default class Magic extends Database<IMagicsDB>{
    private name        : string;
    private description : string;
    private freeze      : boolean;
    private isExist     : boolean = false;

    public GetName        = ():string  => this.name;
    public GetDescription = ():string  => this.description;
    public IsFreeze       = ():boolean => this.freeze;
    public IsExist        = ():boolean => this.isExist;

    constructor(obj?: IMagicsDB){
        super({tableName:"magics"})
        if(obj)
            for(let key in obj)
                this[key] = obj[key];     
    }

    public GetAllItems(sync?:boolean) :ResultSql|Promise<any>{
        let query = `Select * from items where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllCards(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from cards where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllAvatars(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from avatars where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllMissions(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from missions where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }


    public GetAllItemsLite(sync?:boolean) :ResultSql|Promise<any>{
        let query = `Select name,description from items where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllCardsLite(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from cards where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllAvatarsLite(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from avatars where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }
    public GetAllMissionsLite(sync?:boolean):ResultSql|Promise<any>{
        let query = `Select * from missions where magicName=${this.name}`;
        if(sync)
            return new Database().QuerySync(query);
        return new Database().Query(query);
    }


    public static GetMagicByName(magicName:string):Magic{
        let magic: Magic = null;
        new Database().SelectSync<TMagics>({
            Fields:["id","name","description","freeze"],
            from: 'magics',
            where :`name = '${magicName}'`
        })
        .ValidDB<IMagicsDB[]>(data => magic=new Magic(data[0]))
        return magic;
    }

    public static GetListMagics():Magic[]{
        let magics :Magic[] = [];
        new Database().SelectSync<TMagics>({
            Fields:["name","description","freeze"],
            from: 'magics'
        })
        .ValidDB<IMagicsDB[]>(data => data.forEach(magic => magics.push(new Magic(magic))))
        return magics;
    }
    public static GetAllByMagic(magic:Magic, sync=false){
        return({
            Items    : magic.GetAllItems(sync),
            Cards    : magic.GetAllCards(sync),
            Avatars  : magic.GetAllAvatars(sync),
            Missions : magic.GetAllMissions(sync),
        })
    }
}