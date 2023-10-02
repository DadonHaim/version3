"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
class Item extends importAll_1.Database {
    RankUp(num = 1) {
        if (!this.avatar || !this.id)
            return;
        if (this.rank < this.maxUpgrade) {
            this.rank += num;
            this.Update({
                update: { rank: this.rank },
                from: "avatars_items",
                where: `itemID=${this.id} and avatarID=${this.avatar.GetId() || 0}`
            });
        }
    }
    constructor(obj, avatar) {
        super({ tableName: "items" });
        this.id = null; //{get;}                       
        this.name = null;
        this.description = null;
        this.freeze = null;
        this.price = null;
        this.sale = null;
        this.stats = null;
        this.upgrade = null;
        this.categoryItemName = null;
        this.rank = null;
        this.minAvatarRank = null;
        this.maxUpgrade = null;
        this.gender = null;
        this.isExist = false;
        this.isActive = false;
        this.GetId = () => this.id;
        this.GetName = () => this.name;
        this.GetDescription = () => this.description;
        this.GetGender = () => this.gender;
        this.GetFreeze = () => this.freeze;
        this.GetPrice = () => this.price;
        this.GetSale = () => this.sale;
        this.GetStats = () => this.stats;
        this.GetUpgrade = () => this.upgrade;
        this.GetCategoryItem = () => this.categoryItemName;
        this.GetRank = () => this.rank;
        this.GetminAvatarRank = () => this.minAvatarRank;
        this.GetAvatar = () => this.avatar;
        this.GetMagic = () => this.magic;
        this.GetMaxUpgrade = () => this.maxUpgrade;
        this.IsExist = () => this.isExist;
        this.IsActive = () => this.isActive;
        if (obj) {
            for (let key in obj)
                this[key] = obj[key];
            if (obj.magicName)
                this.magic = importAll_1.Magic.GetMagicByName(obj.magicName);
        }
        if (avatar)
            this.SelectSync({
                Fields: ["rank", "active"],
                from: "avatars_items",
                where: `itemID = ${this.id} and avatarID=${avatar.GetId() || 0}`
            })
                .ValidDB(data => {
                this.avatar = avatar;
                this.rank = data[0].rank;
                this.isActive = data[0].active;
            })
                .NoValidDB(() => {
                this.avatar = null;
            });
    }
    GetModelClient() {
        return new importAll_1.ItemClient({
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            sale: this.sale,
            stats: this.stats,
            upgrade: this.upgrade,
            categoryItem: this.categoryItemName,
            rank: this.rank,
            maxUpgrade: this.maxUpgrade,
            gender: this.gender,
            isActive: this.isActive,
            magic: this.magic.GetName(),
        });
    }
    static getAllItemsByAvatar(avatar) {
        return new Promise((resolve, reject) => {
            let items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
                And: ["active"],
                from: "items",
                where: `id = ${avatar.GetId() || 0}`,
                join: "avatars_items",
                on: `avatars_items.avatarID = ${avatar.GetId() || 0} and avatars_items.itemID = items.id`
            })
                .ValidDB(data => {
                data.forEach(item => items.push(new Item(item)));
                resolve(items);
            });
        });
    }
    static GetItemById(itemID) {
        let item = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: 'items',
            where: `id = ${itemID}`
        })
            .ValidDB(data => item = new Item(data[0]));
        return item;
    }
    static GetItemByName(itemName) {
        let item = null;
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: 'items',
            where: `name = ${itemName}`
        })
            .ValidDB(data => item = new Item(data[0]));
        return item;
    }
    static GetItemsByAvatar(avatar) {
        return new Promise((resolve, reject) => {
            let items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
                from: "items",
                join: "avatars_items",
                on: `avatars_items.avatarID = ${avatar.GetId() || 0}`,
            }).ValidDB(data => {
                data.forEach(item => items.push(new Item(item)));
                resolve(items);
            });
        });
    }
    static GetItemsByAvatarSync(avatar) {
        let items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            And: ["isActive"],
            from: "items",
            join: "avatars_items",
            on: `avatars_items.itemID = items.id and avatars_items.avatarID = ${avatar.GetId()} `,
        })
            .ValidDB(data => {
            data.forEach(i => items.push(new Item(i)));
        });
        return items;
    }
    static GetItemsByMagic(magic) {
        return new Promise((resolve, reject) => {
            let items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
                from: "items",
                where: `magicName=${magic.GetName()}`
            })
                .ValidDB(data => {
                data.forEach(i => items.push(new Item(i)));
                resolve(items);
            });
        });
    }
    static GetItemsByMagicSync(magic) {
        let items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: "items",
            where: `magicName=${magic.GetName()}`
        })
            .ValidDB(data => {
            data.forEach(i => items.push(new Item(i)));
        });
        return items;
    }
    static GetItemsByType(type) {
        return new Promise((resolve, reject) => {
            let items = [];
            new importAll_1.Database().SelectSync({
                Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
                from: "items",
                where: `type=${type}`
            })
                .ValidDB(data => {
                data.forEach(i => items.push(new Item(i)));
                resolve(items);
            });
        });
    }
    static GetItemsByTypeSync(type) {
        let items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: "items",
            where: `type=${type}`
        })
            .ValidDB(data => {
            data.forEach(i => items.push(new Item(i)));
        });
        return items;
    }
    static GetStartItems() {
        let items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "freeze", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: "items",
            where: `startItem = 1`
        })
            .ValidDB(data => {
            data.forEach(i => items.push(new Item(i)));
        });
        return items;
    }
    static GetStartItemsClient() {
        let items = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "description", "gender", "price", "stats", "sale", "upgrade", "categoryItemName", "minAvatarRank", "maxUpgrade", "magicName"],
            from: "items",
            where: `startItem = 1`
        })
            .ValidDB(data => {
            data.forEach(i => items.push(new importAll_1.ItemClient({
                id: i.id,
                name: i.name,
                description: i.description,
                price: i.price,
                sale: i.sale,
                stats: i.stats,
                upgrade: i.upgrade,
                categoryItem: i.categoryItemName,
                rank: 0,
                maxUpgrade: 1,
                gender: i.gender == "boy" ?
                    "boy" :
                    i.gender == "girl" ? "girl" : "all",
                magic: i.magicName,
            })));
        });
        return items;
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map