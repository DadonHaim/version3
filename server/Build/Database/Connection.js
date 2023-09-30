"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
const msnodesqlv8_1 = __importDefault(require("msnodesqlv8"));
const synchronized_promise_1 = __importDefault(require("synchronized-promise"));
class Database {
    constructor(obj) {
        this.tableName = "none";
        if (obj)
            this.tableName = obj.tableName;
    }
    Query(query) {
        (0, importAll_1.Debug)(query);
        return new Promise((T, F) => {
            msnodesqlv8_1.default.query(Database.connection, Database.protection(query), (e, r) => e ? F(e) : T(r));
        });
    }
    QuerySync(query) {
        return new importAll_1.ResultSql((0, synchronized_promise_1.default)(this.Query)(query));
    }
    Select(obj) {
        return this.Query(this._select(obj));
    }
    SelectSync(obj, print) {
        if (print)
            console.log(this._select(obj));
        return this.QuerySync(this._select(obj));
    }
    Update(obj) {
        return this.Query(this._update(obj));
    }
    UpdateSync(obj) {
        return this.QuerySync(this._update(obj));
    }
    Insert(obj) {
        return this.Query(this._insert(obj));
    }
    InsertSync(obj) {
        return this.QuerySync(this._insert(obj));
    }
    Delete(obj) {
        return this.Query(this._delete(obj));
    }
    DeleteSync(obj) {
        return this.QuerySync(this._delete(obj));
    }
    _select({ Fields, And, from, join, on, where }) {
        from = from || this.tableName;
        Fields = Fields.map(field => from + "." + field);
        if (And && join)
            Fields.push(And.map(v => join + "." + v));
        let res = (join && on) ?
            `SELECT ${Fields.toString()} FROM ${from} INNER JOIN ${join} ON ${on}  where ${where || '1=1' || '1=1'}` :
            `SELECT ${Fields.toString()} FROM ${from} where ${where || '1=1' || '1=1'}`;
        (0, importAll_1.Debug)(res);
        return res;
    }
    _update({ from, update, where }) {
        let set = [];
        for (let key in update)
            set.push(`${key}='${update[key]}'`);
        (0, importAll_1.Debug)(`Update ${from || this.tableName} SET ${set.toString()} where ${where || '1=1'}`);
        return `Update ${from || this.tableName} SET ${set.toString()} where ${where || '1=1'}`;
    }
    _insert({ from, insert }) {
        let keys = [];
        let vals = [];
        for (let key in insert) {
            keys.push(key);
            vals.push(`'${insert[key]}'`);
        }
        (0, importAll_1.Debug)(`Insert Into ${from || this.tableName} (${keys.toString()}) Values (${vals})`);
        return `Insert Into ${from || this.tableName} (${keys.toString()}) Values (${vals})`;
    }
    _delete({ from, where }) {
        (0, importAll_1.Debug)(`Delete From ${from || this.tableName}  where ${where || '1=1'}`);
        return `Delete From ${from || this.tableName} where ${where || '1=1'}`;
    }
    static protection(value) {
        if (value)
            return value;
        else
            return null;
    }
}
Database.connection = "server=HAIM\\SQLEXPRESS;Database=GameProject;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
exports.default = Database;
//# sourceMappingURL=Connection.js.map