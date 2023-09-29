import { Database } from "./importAll"

function GetAllSettingsFromDB() : IAllSettings{
    let result :IAllSettings ={}

    new Database().QuerySync("select * from global_settings")
    .ValidDB<IGlobalSettings[]>((data)=>{result.global = data[0]})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from settings_client")
    .ValidDB<IClientSettings[]>((data)=>{result.client = data[0]})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from levels")
    .ValidDB<ILevenDB[]>((data)=>{result["levels"] = data})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from categories_items")
    .ValidDB<ICategoryItems[]>((data)=>{result["categoriesItems"] = data})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from categories_cards")
    .ValidDB<ICategoryCards[]>((data)=>{result["categoriesCards"] = data})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from magics")
    .ValidDB<IMagicsDB[]>((data)=>{result["magics"] = data})
    .NoValidDB(()=>{throw "DB ERROR"})

    new Database().QuerySync("select * from items")
    .ValidDB<IItemsDB[]>((data)=>{result["items"] = data})
    .NoValidDB(()=>{throw "DB ERROR"})

    return result;

}


let settings:any = GetAllSettingsFromDB();

export default  function GetSettings():IAllSettings{return settings;}

interface IAllSettings{
    global             ?: IGlobalSettings;     
    client             ?: IClientSettings;     
    levels             ?: ILevenDB[];     
    categoriesItems    ?: ICategoryItems[];             
    categoriesCards    ?: ICategoryCards[];             
    magics             ?: IMagicsDB[];     
    items              ?: IItemsDB[];     
}

