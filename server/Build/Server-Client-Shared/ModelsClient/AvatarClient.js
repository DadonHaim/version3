"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvatarClient = /** @class */ (function () {
    function AvatarClient(obj) {
        this.id = (obj.id) ? obj.id : null;
        this.name = (obj.name) ? obj.name : null;
        this.exp = (obj.exp) ? obj.exp : null;
        this.silver = (obj.silver) ? obj.silver : null;
        this.gold = (obj.gold) ? obj.gold : null;
        this.redPowder = (obj.redPowder) ? obj.redPowder : null;
        this.diamond = (obj.diamond) ? obj.diamond : null;
        this.createdDate = (obj.createdDate) ? obj.createdDate : null;
        this.hp = (obj.hp) ? obj.hp : null;
        this.energy = (obj.energy) ? obj.energy : null;
        this.damage = (obj.damage) ? obj.damage : null;
        this.refillEnergy = (obj.refillEnergy) ? obj.refillEnergy : null;
        this.magicName = (obj.magicName) ? obj.magicName : null;
        this.gender = (obj.gender) ? obj.gender : null;
        this.mainPage = (obj.mainPage) ? obj.mainPage : null;
        this.subPage = (obj.subPage) ? obj.subPage : null;
    }
    AvatarClient.CreateToken = function (token) {
        if (token)
            sessionStorage.setItem("token", token);
    };
    AvatarClient.KillToken = function () {
        sessionStorage.removeItem("token");
    };
    return AvatarClient;
}());
exports.default = AvatarClient;
//# sourceMappingURL=AvatarClient.js.map