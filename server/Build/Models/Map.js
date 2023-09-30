"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
class Map extends importAll_1.Database {
    constructor(obj) {
        super({ tableName: "maps" });
        this.id = null; //{get;}                       
        this.GetId = () => this.id;
        this.GetName = () => this.name;
        this.GetDescription = () => this.description;
        this.IsFreeze = () => this.freeze;
        this.IsExist = () => this.isExist;
        if (obj) {
            this.name = obj.name;
            this.description = obj.description;
            this.freeze = obj.freeze;
        }
        this.isExist = (this.id && this.name) ? true : false;
    }
    GetAllLabyrinth() {
        return null;
    }
    static GetMapById(mapID) {
        let map;
        new importAll_1.Database().QuerySync(`select id,name,description,freeze from maps where id=${mapID}`)
            .ValidDB(data => {
            map = new Map(data[0]);
        });
        return map;
    }
    static GetMapByName(mapName) {
        let map;
        new importAll_1.Database().QuerySync(`select id,name,description,freeze from maps where name=${mapName}`)
            .ValidDB(data => {
            map = new Map(data[0]);
        });
        return map;
    }
    static GetAllMaps() {
        let map = [];
        new importAll_1.Database().QuerySync(`select id,name,description,freeze from maps`)
            .ValidDB(data => {
            data.forEach(m => map.push(new Map(m)));
        });
        return map;
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map