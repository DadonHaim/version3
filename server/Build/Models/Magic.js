"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
var Magic = /** @class */ (function (_super) {
    __extends(Magic, _super);
    function Magic(obj) {
        var _this = _super.call(this, { tableName: "magics" }) || this;
        _this.isExist = false;
        _this.GetName = function () { return _this.name; };
        _this.GetDescription = function () { return _this.description; };
        _this.IsFreeze = function () { return _this.freeze; };
        _this.IsExist = function () { return _this.isExist; };
        if (obj)
            for (var key in obj)
                _this[key] = obj[key];
        return _this;
    }
    Magic.prototype.GetAllItems = function (sync) {
        var query = "Select * from items where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllCards = function (sync) {
        var query = "Select * from cards where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllAvatars = function (sync) {
        var query = "Select * from avatars where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllMissions = function (sync) {
        var query = "Select * from missions where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllItemsLite = function (sync) {
        var query = "Select name,description from items where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllCardsLite = function (sync) {
        var query = "Select * from cards where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllAvatarsLite = function (sync) {
        var query = "Select * from avatars where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.prototype.GetAllMissionsLite = function (sync) {
        var query = "Select * from missions where magicName=".concat(this.name);
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    };
    Magic.GetMagicByName = function (magicName) {
        var magic = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze"],
            from: 'magics',
            where: "name = '".concat(magicName, "'")
        })
            .ValidDB(function (data) { return magic = new Magic(data[0]); });
        return magic;
    };
    Magic.GetListMagics = function () {
        var magics = [];
        new importAll_1.Database().SelectSync({
            Fields: ["name", "description", "freeze"],
            from: 'magics'
        })
            .ValidDB(function (data) { return data.forEach(function (magic) { return magics.push(new Magic(magic)); }); });
        return magics;
    };
    Magic.GetAllByMagic = function (magic, sync) {
        if (sync === void 0) { sync = false; }
        return ({
            Items: magic.GetAllItems(sync),
            Cards: magic.GetAllCards(sync),
            Avatars: magic.GetAllAvatars(sync),
            Missions: magic.GetAllMissions(sync),
        });
    };
    return Magic;
}(importAll_1.Database));
exports.default = Magic;
//# sourceMappingURL=Magic.js.map