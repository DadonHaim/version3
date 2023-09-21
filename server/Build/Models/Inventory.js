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
var Inventory = /** @class */ (function (_super) {
    __extends(Inventory, _super);
    function Inventory(avatar) {
        var _this = _super.call(this, { tableName: "avatars_items" }) || this;
        _this.GetAllItems = function () { return _this.allItems; };
        _this.GetActiveItems = function () { return _this.activeItems; };
        _this.GetAvatar = function () { return _this.avatar; };
        _this.avatar = avatar;
        _this.allItems = importAll_1.Item.GetItemsByAvatarSync(avatar);
        _this.allCard = importAll_1.Card.GetCardsByAvatarSync(avatar);
        _this.activeItems = _this.getActiveItems();
        return _this;
    }
    Inventory.prototype.getActiveItems = function () {
        var result = new importAll_1.CategoriesItemsModel();
        this.allItems.forEach(function (item) {
            if (item.IsActive)
                result[item.GetCategoryItem()] = item;
        });
        return result;
    };
    Inventory.prototype.SetActiveItem = function (obj) {
        this.Update({ from: "avatars_items", update: { active: 0 }, where: "itemID=".concat(this.activeItems[obj.category].GetId(), " and avatarID = ").concat(this.avatar.GetId()) });
        this.activeItems[obj.category] = obj.item;
        this.Update({ from: "avatars_items", update: { active: 1 }, where: " itemID=".concat(obj.item.GetId(), " and avatarID = ").concat(this.avatar.GetId()) });
    };
    return Inventory;
}(importAll_1.Database));
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map