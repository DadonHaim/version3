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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(obj, avatar) {
        var _this = _super.call(this, { tableName: "cards" }) || this;
        _this.name = null;
        _this.description = null;
        _this.type = null;
        _this.price = null;
        _this.move = null;
        _this.attack = null;
        _this.delay = null;
        _this.minAvatarRank = null;
        _this.rank = null;
        _this.upgrade = null;
        _this.freeze = null;
        _this.isExist = null;
        _this.magic = null;
        _this.avatar = null;
        _this.maxUpgrade = null;
        _this.GetId = function () { return _this.id; };
        _this.GetName = function () { return _this.name; };
        _this.GetDescription = function () { return _this.description; };
        _this.GetType = function () { return _this.type; };
        _this.GetPrice = function () { return _this.price; };
        _this.GetMove = function () { return _this.move; };
        _this.GetAttack = function () { return _this.attack; };
        _this.GetDelay = function () { return _this.delay; };
        _this.GetminAvatarRank = function () { return _this.minAvatarRank; };
        _this.GetUpgrade = function () { return _this.upgrade; };
        _this.IsFreeze = function () { return _this.freeze; };
        _this.IsExist = function () { return _this.isExist; };
        _this.GetMagic = function () { return _this.magic; };
        _this.GetRank = function () { return _this.rank; };
        _this.GetAvatar = function () { return _this.avatar; };
        _this.GetMaxUpgrade = function () { return _this.maxUpgrade; };
        if (obj) {
            _this.name = (obj.name) ? obj.name : null;
            _this.description = (obj.description) ? obj.description : null;
            _this.type = (obj.type) ? obj.type : null;
            _this.delay = (obj.delay) ? obj.delay : null;
            _this.freeze = (obj.freeze) ? obj.freeze : null;
            _this.minAvatarRank = (obj.minAvatarRank) ? obj.minAvatarRank : null;
            _this.maxUpgrade = (obj.maxUpgrade) ? obj.maxUpgrade : null;
            _this.price = (obj.price) ? new importAll_1.Price(obj.price) : null;
            _this.move = (obj.move) ? new importAll_1.Move(obj.move) : null;
            _this.attack = (obj.attack) ? new importAll_1.Attack(obj.attack) : null;
            _this.upgrade = (obj.upgrade) ? new importAll_1.UpgradeCards(obj.upgrade) : null;
            _this.magic = (obj.magicID) ? importAll_1.Magic.GetMagicById(obj.magicID) : null;
            _this.isExist = (_this.id && _this.name) ? true : false;
        }
        if (avatar)
            _this.SelectSync({
                Fields: ["rank"],
                from: "avatars_cards",
                where: "cardID = ".concat(_this.id, " and avatarID=").concat(avatar.GetId())
            })
                .ValidDB(function (data) {
                _this.avatar = avatar;
                _this.rank = data[0].rank;
            })
                .NoValidDB(function () {
                _this.avatar = null;
            });
        return _this;
    }
    Card.prototype.RankUp = function (num) {
        if (num === void 0) { num = 1; }
        if (!this.avatar || !this.id)
            return;
        if (this.rank < this.maxUpgrade) {
            this.rank += num;
            this.Update({
                update: { rank: this.rank },
                from: "avatars_cards",
                where: "cardID=".concat(this.id, " and avatarID=").concat(this.avatar.GetId())
            });
        }
    };
    Card.GetAllcardsByAvatar = function (avatar) {
        return new Promise(function (resolve, reject) {
            var cards = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
                And: ["active"],
                from: "cards",
                where: "id = ".concat(avatar.GetId()),
                join: "avatars_cards",
                on: "avatars_cards.avatarID = ".concat(avatar.GetId(), " and avatars_cards.CardID = cards.id")
            })
                .ValidDB(function (data) {
                data.forEach(function (card) { return cards.push(new Card(card)); });
                resolve(cards);
            });
        });
    };
    Card.GetCardById = function (CardID) {
        var cards = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
            from: 'cards',
            where: "id = ".concat(CardID)
        })
            .ValidDB(function (data) { return cards = new Card(data[0]); });
        return cards;
    };
    Card.GetCardByName = function (CardName) {
        var cards = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
            from: 'cards',
            where: "name = ".concat(CardName)
        })
            .ValidDB(function (data) { return cards = new Card(data[0]); });
        return cards;
    };
    Card.GetCardsByAvatar = function (avatar) {
        return new Promise(function (resolve, reject) {
            var cards = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
                from: "cards",
                join: "avatars_cards",
                on: "avatars_cards.avatarID = ".concat(avatar.GetId()),
            }).ValidDB(function (data) {
                data.forEach(function (card) { return cards.push(new Card(card)); });
                resolve(cards);
            });
        });
    };
    Card.GetCardsByAvatarSync = function (avatar) {
        var cards = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
            from: "cards",
            join: "avatars_cards",
            on: "avatars_cards.avatarID = ".concat(avatar.GetId()),
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return cards.push(new Card(i)); });
        });
        return cards;
    };
    Card.GetCardsByMagic = function (magic) {
        return new Promise(function (resolve, reject) {
            var cards = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
                from: "cards",
                where: "magicID=".concat(magic.GetId())
            })
                .ValidDB(function (data) {
                data.forEach(function (i) { return cards.push(new Card(i)); });
                resolve(cards);
            });
        });
    };
    Card.GetCardsByMagicSync = function (magic) {
        var cards = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
            from: "cards",
            where: "magicID=".concat(magic.GetId())
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return cards.push(new Card(i)); });
        });
        return cards;
    };
    Card.GetCardsByType = function (type) {
        return new Promise(function (resolve, reject) {
            var cards = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
                from: "cards",
                where: "type=".concat(type)
            })
                .ValidDB(function (data) {
                data.forEach(function (i) { return cards.push(new Card(i)); });
                resolve(cards);
            });
        });
    };
    Card.GetCardsByTypeSync = function (type) {
        var cards = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "attack", "delay", "magicID", "move", "price", "type", "upgrade", "minAvatarRank", "maxUpgrade"],
            from: "cards",
            where: "type=".concat(type)
        })
            .ValidDB(function (data) {
            data.forEach(function (i) { return cards.push(new Card(i)); });
        });
        return cards;
    };
    return Card;
}(importAll_1.Database));
exports.default = Card;
//# sourceMappingURL=Card.js.map