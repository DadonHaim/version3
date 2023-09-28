"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.LoginSettings = exports.RegisterSettings = exports.ResultValid = void 0;
var ResultValid_1 = __importDefault(require("./ResultValid"));
exports.ResultValid = ResultValid_1.default;
var Settings_1 = require("./Settings");
Object.defineProperty(exports, "RegisterSettings", { enumerable: true, get: function () { return Settings_1.RegisterSettings; } });
Object.defineProperty(exports, "LoginSettings", { enumerable: true, get: function () { return Settings_1.LoginSettings; } });
var ResultSql = /** @class */ (function () {
    function ResultSql() {
    }
    ResultSql.prototype.ValidDB = function (s) { };
    ResultSql.prototype.NoValidDB = function (s) { };
    return ResultSql;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.QuerySync = function (s) { return new ResultSql(); };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=importAll.js.map