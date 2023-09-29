"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./importAll");
function GetAllSettingsFromDB() {
    var result = {};
    new importAll_1.Database().QuerySync("select * from global_settings")
        .ValidDB(function (data) { result.global = data[0]; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from settings_client")
        .ValidDB(function (data) { result.client = data[0]; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from levels")
        .ValidDB(function (data) { result["levels"] = data; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from categories_items")
        .ValidDB(function (data) { result["categoriesItems"] = data; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from categories_cards")
        .ValidDB(function (data) { result["categoriesCards"] = data; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from magics")
        .ValidDB(function (data) { result["magics"] = data; })
        .NoValidDB(function () { throw "DB ERROR"; });
    new importAll_1.Database().QuerySync("select * from items")
        .ValidDB(function (data) { result["items"] = data; })
        .NoValidDB(function () { throw "DB ERROR"; });
    return result;
}
var settings = GetAllSettingsFromDB();
function GetSettings() { return settings; }
exports.default = GetSettings;
//# sourceMappingURL=settings.js.map