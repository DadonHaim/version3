"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
class Avatar extends importAll_1.Database {
    constructor(avatarObj, user) {
        super({ tableName: "avatars" });
        this.id = null; //{get;}                       
        this.name = null; //{get;}
        this.exp = null; //{get;}
        this.hp = null; //{get;}
        this.energy = null; //{get;}
        this.refillEnergy = null; //{get;}
        this.silver = null; //{get;}
        this.gold = null; //{get;}
        this.redPowder = null; //{get;}
        this.diamond = null; //{get;}
        this.createdDate = null; //{get;}
        this.gender = null; //{get;}
        this.isExist = false;
        this.isActive = false;
        this.isSelectMission = false;
        this.isFreeze = false;
        this.mainPage = 'Game';
        this.subPage = 'Guest-Home';
        this.GetHat = () => this.hat;
        this.GetShirt = () => this.shirt;
        this.GetPants = () => this.pants;
        this.GetShoes = () => this.shoes;
        this.GetWeapon = () => this.weapon;
        this.SetHat = (value) => this.hat = value;
        this.SetShirt = (value) => this.shirt = value;
        this.SetPants = (value) => this.pants = value;
        this.SetShoes = (value) => this.shoes = value;
        this.SetWeapon = (value) => this.weapon = value;
        this.GetId = () => this.id;
        this.GetName = () => this.name;
        this.GetExp = () => this.exp;
        this.GetHp = () => this.hp;
        this.GetSilver = () => this.silver;
        this.GetEnergy = () => this.energy;
        this.GetRefillEnergy = () => this.refillEnergy;
        this.GetGold = () => this.gold;
        this.GetRedPowder = () => this.redPowder;
        this.GetDiamond = () => this.diamond;
        this.GetCreatedDate = () => this.createdDate;
        this.GetUser = () => this.user;
        this.GetActiveMission = () => this.activeMission;
        this.GetMagic = () => this.magic;
        this.GetGender = () => this.gender;
        this.GetmainPage = () => this.mainPage;
        this.GetSubPage = () => this.subPage;
        this.GetItems = () => this.items;
        for (let key in avatarObj)
            this[key] = avatarObj[key];
        if (user)
            this.user = user;
        this.getAllItems();
        this.getAllActiveItems();
    }
    getAllItems() {
        let items = [];
        items = importAll_1.Item.GetItemsByAvatarSync(this);
        this.items = items;
    }
    getAllActiveItems() {
        this.items.forEach(item => {
            if (item.GetCategoryItem() == "hat" && item.IsActive())
                this.hat = item;
            else if (item.GetCategoryItem() == "pants" && item.IsActive())
                this.pants = item;
            else if (item.GetCategoryItem() == "shirt" && item.IsActive())
                this.shirt = item;
            else if (item.GetCategoryItem() == "shoes" && item.IsActive())
                this.shoes = item;
            else if (item.GetCategoryItem() == "weapon" && item.IsActive())
                this.weapon = item;
        });
    }
    EnterToActiveAvatar() {
        if (!this.isExist)
            return;
        this.user.UpdateActiveAvatar(this);
        this.isActive = true;
    }
    OutFromActiveAvatar() {
        if (!this.isExist)
            return;
        this.user.UpdateActiveAvatar(null);
        this.isActive = false;
    }
    GetModelClient() {
        let result = new importAll_1.AvatarClient({
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
            hat: this.hat ? this.hat.GetModelClient() : null,
            shirt: this.shirt ? this.shirt.GetModelClient() : null,
            pants: this.pants ? this.pants.GetModelClient() : null,
            shoes: this.shoes ? this.shoes.GetModelClient() : null,
            weapon: this.weapon ? this.weapon.GetModelClient() : null,
        });
        return result;
    }
    static GetAvatarsByUser(user) {
        let avatars = [];
        new importAll_1.Database().SelectSync({
            Fields: ["id", "name", "username", "createdDate", "exp", "gold", "gender", "mainPage", "subPage", "silver", "redPowder", "diamond", "freeze", "hp", "energy", "refillEnergy", "magicName", "missionID"],
            from: "avatars",
            where: `username='${user.GetUsername()}'`
        })
            .ValidDB(data => {
            data.forEach((avatar) => {
                avatars.push(new Avatar(avatar, user));
            });
        })
            .NoValidDB(err => { });
        return avatars;
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map