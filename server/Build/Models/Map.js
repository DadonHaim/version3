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
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(obj) {
        var _this = _super.call(this, { tableName: "maps" }) || this;
        _this.id = null; //{get;}                       
        _this.GetId = function () { return _this.id; };
        _this.GetName = function () { return _this.name; };
        _this.GetDescription = function () { return _this.description; };
        _this.IsFreeze = function () { return _this.freeze; };
        _this.IsExist = function () { return _this.isExist; };
        if (obj) {
            _this.name = obj.name;
            _this.description = obj.description;
            _this.freeze = obj.freeze;
        }
        _this.isExist = (_this.id && _this.name) ? true : false;
        return _this;
    }
    Map.prototype.GetAllLabyrinth = function () {
        return null;
    };
    Map.GetMapById = function (mapID) {
        var map;
        new importAll_1.Database().QuerySync("select id,name,description,freeze from maps where id=".concat(mapID))
            .ValidDB(function (data) {
            map = new Map(data[0]);
        });
        return map;
    };
    Map.GetMapByName = function (mapName) {
        var map;
        new importAll_1.Database().QuerySync("select id,name,description,freeze from maps where name=".concat(mapName))
            .ValidDB(function (data) {
            map = new Map(data[0]);
        });
        return map;
    };
    Map.GetAllMaps = function () {
        var map = [];
        new importAll_1.Database().QuerySync("select id,name,description,freeze from maps")
            .ValidDB(function (data) {
            data.forEach(function (m) { return map.push(new Map(m)); });
        });
        return map;
    };
    return Map;
}(importAll_1.Database));
exports.default = Map;
//# sourceMappingURL=Map.js.map