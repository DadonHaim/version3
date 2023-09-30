"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./importAll");
function GetAllSettingsFromDB() {
    let result = {};
    new importAll_1.Database().QuerySync("select * from global_settings")
        .ValidDB((data) => { result.global = data[0]; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from settings_client")
        .ValidDB((data) => { result.client = data[0]; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from levels")
        .ValidDB((data) => { result["levels"] = data; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from categories_items")
        .ValidDB((data) => { result["categoriesItems"] = data; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from categories_cards")
        .ValidDB((data) => { result["categoriesCards"] = data; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from magics")
        .ValidDB((data) => { result["magics"] = data; })
        .NoValidDB(() => { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from items")
        .ValidDB((data) => { result["items"] = data; })
        .NoValidDB(() => { throw "DB ERROR"; });
    return result;
}
let settings = GetAllSettingsFromDB();
function GetSettings() { return settings; }
exports.default = GetSettings;
//# sourceMappingURL=settings.js.map