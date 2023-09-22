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
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    //#endregion
    //#region Method
    function Avatar(avatarObj, user) {
        var _this = _super.call(this, { tableName: "avatars" }) || this;
        //#region Fields
        _this.name = null; //{get;}
        _this.exp = null; //{get;}
        _this.silver = null; //{get;}
        _this.gold = null; //{get;}
        _this.redPowder = null; //{get;}
        _this.diamond = null; //{get;}
        _this.createdDate = null; //{get;}
        _this.gender = null; //{get;}
        _this.inventory = null; //לערוך
        //#endregion
        //#region Flags
        _this.isExist = false;
        _this.isActive = false;
        _this.isSelectMission = false;
        _this.isFreeze = false;
        _this.mainPage = 'Game';
        _this.subPage = 'Guest-Home';
        //#endregion
        //#region Gets      
        _this.GetId = function () { return _this.id; };
        _this.GetName = function () { return _this.name; };
        _this.GetExp = function () { return _this.exp; };
        _this.GetSilver = function () { return _this.silver; };
        _this.GetGold = function () { return _this.gold; };
        _this.GetRedPowder = function () { return _this.redPowder; };
        _this.GetDiamond = function () { return _this.diamond; };
        _this.GetCreatedDate = function () { return _this.createdDate; };
        _this.GetInventory = function () { return _this.inventory; };
        _this.GetUser = function () { return _this.user; };
        _this.GetActiveMission = function () { return _this.activeMission; };
        _this.GetMagic = function () { return _this.magic; };
        _this.GetPage = function () { return _this.page; };
        _this.GetGender = function () { return _this.gender; };
        if (avatarObj) {
            _this.id = avatarObj.id;
            _this.name = avatarObj.name;
            _this.exp = avatarObj.exp;
            _this.silver = avatarObj.silver;
            _this.gold = avatarObj.gold;
            _this.redPowder = avatarObj.redPowder;
            _this.diamond = avatarObj.diamond;
            _this.createdDate = avatarObj.createdDate;
            _this.inventory = new importAll_1.Inventory(_this);
            _this.isExist = true;
            _this.magic = importAll_1.Magic.GetMagicById(avatarObj.magicID);
            _this.gender = avatarObj.gender;
            _this.mainPage = avatarObj.mainPage;
            _this.subPage = avatarObj.subPage;
        }
        if (user)
            _this.user = user;
        return _this;
    }
    Avatar.prototype.EnterToActiveAvatar = function () {
        if (!this.isExist)
            return;
        this.user.UpdateActiveAvatar(this);
        this.isActive = true;
    };
    Avatar.prototype.OutFromActiveAvatar = function () {
        if (!this.isExist)
            return;
        this.user.UpdateActiveAvatar(null);
        this.isActive = false;
    };
    //#endregion
    //#region statics
    Avatar.GetAvatarsByUserId = function (user) {
        var avatars = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "userID", "createdDate", "exp", "gold", "gender", "mainPage", "subPage", "silver", "redPowder", "diamond", "freeze", "magicID", "missionID"],
            from: "avatars",
            where: "userID='".concat(user.GetId(), "'")
        })
            .ValidDB(function (data) {
            data.forEach(function (avatar) {
                avatars.push(new Avatar(avatar, user));
            });
        })
            .NoValidDB(function (err) { });
        return avatars;
    };
    return Avatar;
}(importAll_1.Database));
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map