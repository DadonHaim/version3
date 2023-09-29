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
    function Avatar(avatarObj, user) {
        var _this = _super.call(this, { tableName: "avatars" }) || this;
        _this.id = null; //{get;}                       
        _this.name = null; //{get;}
        _this.exp = null; //{get;}
        _this.hp = null; //{get;}
        _this.energy = null; //{get;}
        _this.refillEnergy = null; //{get;}
        _this.silver = null; //{get;}
        _this.gold = null; //{get;}
        _this.redPowder = null; //{get;}
        _this.diamond = null; //{get;}
        _this.createdDate = null; //{get;}
        _this.gender = null; //{get;}
        _this.isExist = false;
        _this.isActive = false;
        _this.isSelectMission = false;
        _this.isFreeze = false;
        _this.mainPage = 'Game';
        _this.subPage = 'Guest-Home';
        _this.GetId = function () { return _this.id; };
        _this.GetName = function () { return _this.name; };
        _this.GetExp = function () { return _this.exp; };
        _this.GetHp = function () { return _this.hp; };
        _this.GetSilver = function () { return _this.silver; };
        _this.GetEnergy = function () { return _this.energy; };
        _this.GetRefillEnergy = function () { return _this.refillEnergy; };
        _this.GetGold = function () { return _this.gold; };
        _this.GetRedPowder = function () { return _this.redPowder; };
        _this.GetDiamond = function () { return _this.diamond; };
        _this.GetCreatedDate = function () { return _this.createdDate; };
        _this.GetUser = function () { return _this.user; };
        _this.GetActiveMission = function () { return _this.activeMission; };
        _this.GetMagic = function () { return _this.magic; };
        _this.GetGender = function () { return _this.gender; };
        _this.GetmainPage = function () { return _this.mainPage; };
        _this.GetsubPage = function () { return _this.subPage; };
        _this.GetItems = function () { return _this.items; };
        for (var key in avatarObj)
            _this[key] = avatarObj[key];
        if (user)
            _this.user = user;
        _this.items = _this.getAllItems();
        return _this;
    }
    Avatar.prototype.getAllItems = function () {
        var items = [];
        items = importAll_1.Item.GetItemsByAvatarSync(this);
        return items;
    };
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
    Avatar.prototype.GetModelClient = function () {
        var result = new importAll_1.AvatarClient({
            id: this.GetId(),
            name: this.GetName(),
            exp: this.GetExp(),
            silver: this.GetSilver(),
            hp: this.GetHp(),
            energy: this.GetEnergy(),
            refillEnergy: this.GetRefillEnergy(),
            gold: this.GetGold(),
            diamond: this.GetDiamond(),
            redPowder: this.GetRedPowder(),
            createdDate: this.GetCreatedDate(),
            magicName: (this.magic) ? this.GetMagic().GetName() : "fire",
            gender: this.gender,
            mainPage: this.mainPage,
            subPage: this.subPage,
        });
        return result;
    };
    Avatar.GetAvatarsByUser = function (user) {
        var avatars = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "username", "createdDate", "exp", "gold", "gender", "mainPage", "subPage", "silver", "redPowder", "diamond", "freeze", "hp", "energy", "refillEnergy", "magicName", "missionID"],
            from: "avatars",
            where: "username='".concat(user.GetUsername(), "'")
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