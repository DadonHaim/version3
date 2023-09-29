"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.path = exports.fs = exports.http = exports.express = exports.GetSettings = exports.CrossMidlleWare = exports.UserClient = exports.ClientStart = exports.SocketVer2 = exports.Avatar = exports.Map = exports.User = exports.Magic = exports.Item = exports.RandomString = exports.DebugSocket = exports.Debug = exports.ResultSql = exports.Database = exports.AvatarsLabyrinthsModel = exports.AvatarsMonstersModel = exports.GlobalSettingModel = exports.LabyrinthsModel = exports.MapsModel = exports.MonsterModel = exports.RankSettingModel = exports.MissionsModel = exports.AvatarsItemsModel = exports.RegisterValidation = exports.LoginValidation = exports.ResultValid = exports.AvatarClient = exports.RegisterSettings = exports.LoginSettings = void 0;
var AvatarsItemsModel_1 = __importDefault(require("./Database/DbModels/AvatarsItemsModel"));
exports.AvatarsItemsModel = AvatarsItemsModel_1.default;
var MissionsModel_1 = __importDefault(require("./Database/DbModels/MissionsModel"));
exports.MissionsModel = MissionsModel_1.default;
var RankSettingModel_1 = __importDefault(require("./Database/DbModels/RankSettingModel"));
exports.RankSettingModel = RankSettingModel_1.default;
var MonsterModel_1 = __importDefault(require("./Database/DbModels/MonsterModel"));
exports.MonsterModel = MonsterModel_1.default;
var MapsModel_1 = __importDefault(require("./Database/DbModels/MapsModel"));
exports.MapsModel = MapsModel_1.default;
var LabyrinthsModel_1 = __importDefault(require("./Database/DbModels/LabyrinthsModel"));
exports.LabyrinthsModel = LabyrinthsModel_1.default;
var GlobalSettingModel_1 = __importDefault(require("./Database/DbModels/GlobalSettingModel"));
exports.GlobalSettingModel = GlobalSettingModel_1.default;
var AvatarsMonstersModel_1 = __importDefault(require("./Database/DbModels/AvatarsMonstersModel"));
exports.AvatarsMonstersModel = AvatarsMonstersModel_1.default;
var AvatarsLabyrinthsModel_1 = __importDefault(require("./Database/DbModels/AvatarsLabyrinthsModel"));
exports.AvatarsLabyrinthsModel = AvatarsLabyrinthsModel_1.default;
var Connection_1 = __importDefault(require("./Database/Connection"));
exports.Database = Connection_1.default;
var ResultSql_1 = __importDefault(require("./Database/ResultSql"));
exports.ResultSql = ResultSql_1.default;
var Debug_1 = __importStar(require("./Server-Client-Shared/Dev/Debug"));
exports.Debug = Debug_1.default;
Object.defineProperty(exports, "DebugSocket", { enumerable: true, get: function () { return Debug_1.DebugSocket; } });
var RandomString_1 = __importDefault(require("./Server-Client-Shared/Functions/RandomString"));
exports.RandomString = RandomString_1.default;
var Cross_1 = __importDefault(require("./MiddleWares/Cross"));
exports.CrossMidlleWare = Cross_1.default;
var Item_1 = __importDefault(require("./Models/Item"));
exports.Item = Item_1.default;
var Magic_1 = __importDefault(require("./Models/Magic"));
exports.Magic = Magic_1.default;
var User_1 = __importDefault(require("./Models/User"));
exports.User = User_1.default;
var Map_1 = __importDefault(require("./Models/Map"));
exports.Map = Map_1.default;
// import Card                           from "./Models/Card"                                ;
var Avatar_1 = __importDefault(require("./Models/Avatar"));
exports.Avatar = Avatar_1.default;
var Socket_1 = __importStar(require("./Socket/Socket"));
exports.ClientStart = Socket_1.default;
Object.defineProperty(exports, "SocketVer2", { enumerable: true, get: function () { return Socket_1.SocketVer2; } });
var express_1 = __importDefault(require("express"));
exports.express = express_1.default;
var http_1 = __importDefault(require("http"));
exports.http = http_1.default;
var fs_1 = __importDefault(require("fs"));
exports.fs = fs_1.default;
var path_1 = __importDefault(require("path"));
exports.path = path_1.default;
var UserClient_1 = __importDefault(require("./Server-Client-Shared/ModelsClient/UserClient"));
exports.UserClient = UserClient_1.default;
var AvatarClient_1 = __importDefault(require("./Server-Client-Shared/ModelsClient/AvatarClient"));
exports.AvatarClient = AvatarClient_1.default;
var ResultValid_1 = __importDefault(require("./Server-Client-Shared/ResultValid"));
exports.ResultValid = ResultValid_1.default;
var LoginValidation_1 = __importStar(require("./Server-Client-Shared/Validations/LoginValidation"));
exports.LoginValidation = LoginValidation_1.default;
Object.defineProperty(exports, "LoginSettings", { enumerable: true, get: function () { return LoginValidation_1.LoginSettings; } });
Object.defineProperty(exports, "RegisterSettings", { enumerable: true, get: function () { return LoginValidation_1.RegisterSettings; } });
var RegisterValidation_1 = __importDefault(require("./Server-Client-Shared/Validations/RegisterValidation"));
exports.RegisterValidation = RegisterValidation_1.default;
var settings_1 = __importDefault(require("./settings"));
exports.GetSettings = settings_1.default;
var Server = require("socket.io").Server;
exports.Server = Server;
//# sourceMappingURL=importAll.js.map