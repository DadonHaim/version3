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
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(obj, avatar) {
        var _this = _super.call(this, { tableName: "items" }) || this;
        //#region Fields
        _this.name = null;
        _this.description = null;
        _this.freeze = null;
        _this.price = null;
        _this.color = null;
        _this.sale = null;
        _this.upgrade = null;
        _this.categoryItem = null;
        _this.rank = null;
        _this.minAvatarRank = null;
        _this.maxUpgrade = null;
        //#endregion
        //#region Flags
        _this.isExist = false;
        _this.isActive = false;
        //#endregion
        //#region Gets
        _this.GetId = function () { return _this.id; };
        _this.GetName = function () { return _this.name; };
        _this.GetDescription = function () { return _this.description; };
        _this.GetFreeze = function () { return _this.freeze; };
        _this.GetPrice = function () { return _this.price; };
        _this.GetColor = function () { return _this.color; };
        _this.GetSale = function () { return _this.sale; };
        _this.GetUpgrade = function () { return _this.upgrade; };
        _this.GetCategoryItem = function () { return _this.categoryItem; };
        _this.GetRank = function () { return _this.rank; };
        _this.GetminAvatarRank = function () { return _this.minAvatarRank; };
        _this.GetAvatar = function () { return _this.avatar; };
        _this.GetMagic = function () { return _this.magic; };
        _this.GetMaxUpgrade = function () { return _this.maxUpgrade; };
        _this.IsExist = function () { return _this.isExist; };
        _this.IsActive = function () { return _this.isActive; };
        if (obj && obj) {
            _this.id = (obj.id) ? obj.id : null;
            _this.name = (obj.name) ? obj.name : null;
            _this.description = (obj.description) ? obj.description : null;
            _this.freeze = (obj.freeze) ? obj.freeze : null;
            _this.color = (obj.color) ? obj.color : null;
            _this.price = (obj.price) ? new importAll_1.Price(obj.price) : null;
            _this.sale = (obj.sale) ? new importAll_1.Sale(obj.sale) : null;
            _this.upgrade = (obj.upgrade) ? new importAll_1.UpgradeItems(obj.upgrade) : null;
            _this.categoryItem = (obj.categoryItem) ? obj.categoryItem : null;
            _this.minAvatarRank = (obj.minAvatarRank) ? obj.minAvatarRank : null;
            _this.magic = (obj.magicID) ? importAll_1.Magic.GetMagicById(obj.magicID) : null;
            _this.maxUpgrade = (obj.maxUpgrade) ? obj.maxUpgrade : null;
            _this.isActive = (obj.active) ? true : false;
            _this.isExist = (_this.id && !_this.freeze) ? true : false;
        }
        if (avatar)
            _this.SelectSync({
                Fields: ["rank", "active"],
                from: "avatars_items",
                where: "itemID = ".concat(_this.id, " and avatarID=").concat(avatar.GetId())
            })
                .ValidDB(function (data) {
                _this.avatar = avatar;
                _this.rank = data[0].rank;
                _this.isActive = data[0].active;
            })
                .NoValidDB(function () {
                _this.avatar = null;
            });
        return _this;
    }
    //#endregion
    //#region Method
    Item.prototype.RankUp = function (num) {
        if (num === void 0) { num = 1; }
        if (!this.avatar || !this.id)
            return;
        if (this.rank < this.maxUpgrade) {
            this.rank += num;
            this.Update({
                update: { rank: this.rank },
                from: "avatars_items",
                where: "itemID=".concat(this.id, " and avatarID=").concat(this.avatar.GetId())
            });
        }
    };
    //#endregion 
    //#region statics
    Item.getAllItemsByAvatar = function (avatar) {
        return new Promise(function (resolve, reject) {
            var items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
                And: ["active"],
                from: "items",
                where: "id = ".concat(avatar.GetId()),
                join: "avatars_items",
                on: "avatars_items.avatarID = ".concat(avatar.GetId(), " and avatars_items.itemID = items.id")
            })
                .ValidDB(function (data) {
                data.forEach(function (item) { return items.push(new Item(item)); });
                resolve(items);
            });
        });
    };
    Item.GetItemById = function (itemID) {
        var item = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
            from: 'items',
            where: "id = ".concat(itemID)
        })
            .ValidDB(function (data) { return item = new Item(data[0]); });
        return item;
    };
    Item.GetItemByName = function (itemName) {
        var item = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
            from: 'items',
            where: "name = ".concat(itemName)
        })
            .ValidDB(function (data) { return item = new Item(data[0]); });
        return item;
    };
    Item.GetItemsByAvatar = function (avatar) {
        return new Promise(function (resolve, reject) {
            var items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
                from: "items",
                join: "avatars_items",
                on: "avatars_items.avatarID = ".concat(avatar.GetId()),
            }).ValidDB(function (data) {
                data.forEach(function (item) { return items.push(new Item(item)); });
                resolve(items);
            });
        });
    };
    Item.GetItemsByAvatarSync = function (avatar) {
        var items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
            from: "items",
            join: "avatars_items",
            on: "avatars_items.avatarID = ".concat(avatar.GetId()),
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return items.push(new Item(i)); });
        });
        return items;
    };
    Item.GetItemsByMagic = function (magic) {
        return new Promise(function (resolve, reject) {
            var items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
                from: "items",
                where: "magicID=".concat(magic.GetId())
            })
                .ValidDB(function (data) {
                data.forEach(function (i) { return items.push(new Item(i)); });
                resolve(items);
            });
        });
    };
    Item.GetItemsByMagicSync = function (magic) {
        var items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
            from: "items",
            where: "magicID=".concat(magic.GetId())
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return items.push(new Item(i)); });
        });
        return items;
    };
    Item.GetItemsByType = function (type) {
        return new Promise(function (resolve, reject) {
            var items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
                from: "items",
                where: "type=".concat(type)
            })
                .ValidDB(function (data) {
                data.forEach(function (i) { return items.push(new Item(i)); });
                resolve(items);
            });
        });
    };
    Item.GetItemsByTypeSync = function (type) {
        var items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "minAvatarRank", "maxUpgrade"],
            from: "items",
            where: "type=".concat(type)
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return items.push(new Item(i)); });
        });
        return items;
    };
    return Item;
}(importAll_1.Database));
exports.default = Item;
//# sourceMappingURL=Item.js.map