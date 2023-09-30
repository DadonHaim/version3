"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
class Magic extends importAll_1.Database {
    constructor(obj) {
        super({ tableName: "magics" });
        this.isExist = false;
        this.GetName = () => this.name;
        this.GetDescription = () => this.description;
        this.IsFreeze = () => this.freeze;
        this.IsExist = () => this.isExist;
        if (obj)
            for (let key in obj)
                this[key] = obj[key];
    }
    GetAllItems(sync) {
        let query = `Select * from items where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllCards(sync) {
        let query = `Select * from cards where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllAvatars(sync) {
        let query = `Select * from avatars where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllMissions(sync) {
        let query = `Select * from missions where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllItemsLite(sync) {
        let query = `Select name,description from items where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllCardsLite(sync) {
        let query = `Select * from cards where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllAvatarsLite(sync) {
        let query = `Select * from avatars where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    GetAllMissionsLite(sync) {
        let query = `Select * from missions where magicName=${this.name}`;
        if (sync)
            return new importAll_1.Database().QuerySync(query);
        return new importAll_1.Database().Query(query);
    }
    static GetMagicByName(magicName) {
        let magic = null;
        new importAll_1.Database().SelectSync({
            Fields: ["name", "description", "freeze"],
            from: 'magics',
            where: `name = '${magicName}'`
        })
            .ValidDB(data => magic = new Magic(data[0]));
        return magic;
    }
    static GetListMagics() {
        let magics = [];
        new importAll_1.Database().SelectSync({
            Fields: ["name", "description", "freeze"],
            from: 'magics'
        })
            .ValidDB(data => data.forEach(magic => magics.push(new Magic(magic))));
        return magics;
    }
    static GetAllByMagic(magic, sync = false) {
        return ({
            Items: magic.GetAllItems(sync),
            Cards: magic.GetAllCards(sync),
            Avatars: magic.GetAllAvatars(sync),
            Missions: magic.GetAllMissions(sync),
        });
    }
}
exports.default = Magic;
//# sourceMappingURL=Magic.js.map