"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
class User extends importAll_1.Database {
    //#region Method
    constructor(obj, login = false) {
        super({ tableName: "users" });
        this.username = null; //{get;}                       
        this.email = null; //{get; set;}                   
        this.firstName = null; //{get; set;}                       
        this.lastName = null; //{get; set;}                       
        this.birthday = null; //{get; set;}                       
        this.registerDate = null; //{get;}                           
        this.banned = null; //{get;}                   
        this.freeze = null; //{get;}                   
        this.token = null; //{get;}            
        this.message = {
            login: { username: '', password: '', status: '' },
            register: {}
        };
        this.isExist = false; //{get;}         
        this.isLogin = false; //{get;}         
        this.isSelectedAvatar = false; //{get; set;}                     
        this.avatars = []; //{get;}
        this.GetUsername = () => this.username;
        this.GetEmail = () => this.email;
        this.GetFirstName = () => this.firstName;
        this.GetLastName = () => this.lastName;
        this.GetBirthday = () => this.birthday;
        this.GetRegisterDate = () => this.registerDate;
        this.GetBanned = () => this.banned;
        this.GetFreeze = () => this.freeze;
        this.GetToken = () => this.token;
        this.GetAvatars = () => this.avatars;
        this.GetActiveAvatar = () => this.activeAvatar;
        this.IsExist = () => this.isExist;
        this.IsLogin = () => this.isLogin;
        this.IsSelectedAvatar = () => this.isSelectedAvatar;
        this.setEmail = (value) => { this.email = value; };
        this.setFirstName = (value) => { this.firstName = value; };
        this.setLastName = (value) => { this.lastName = value; };
        this.setBirthday = (value) => { this.birthday = value; };
        this.setIsSelectedAvatar = (value) => { this.isSelectedAvatar = value; };
        if (obj)
            for (let key in obj)
                this[key] = obj[key];
        this.isExist = this.username ? true : false;
        login ? this.ILogin() : this.isLogin = false;
    }
    ILogin() {
        this.isLogin = true;
        this.avatars = importAll_1.Avatar.GetAvatarsByUser(this);
    }
    Logout() {
        if (this.isLogin) {
            this.removeToken();
            this.isLogin = false;
        }
        return this;
    }
    Login(obj) {
        if (!this.isLogin) {
            (0, importAll_1.LoginValidation)(obj).Valid(() => {
                this.SelectSync({
                    Fields: ["username", "email", "firstName", "lastName", "registerDate", "birthday", "freeze", "token"],
                    where: `username ='${obj.username}' and password = '${obj.password}'`
                })
                    .ValidDB((data) => {
                    for (let key in data[0])
                        this[key] = data[0][key];
                    this.isExist = true;
                    this.isLogin = true;
                    this.createToken();
                    this.avatars = importAll_1.Avatar.GetAvatarsByUser(this);
                })
                    .NoValidDB(() => {
                    this.isExist = false;
                    this.isLogin = false;
                    this.message.login = { status: "login no valid" };
                });
            }).NoValid((msgs) => this.message.login = Object.assign(Object.assign({}, msgs), { status: "login no valid" }));
        }
        return this;
    }
    Register(obj) {
        if (!this.isLogin) {
            (0, importAll_1.RegisterValidation)(obj).Valid(() => {
                this.isExist = true;
                this.isLogin = false;
                this.username = obj.username;
                this.QuerySync(`insert into users (username,password,email,firstName,lastName) Values ('${obj.username}','${obj.password}','${obj.email}','${obj.firstName}','${obj.lastName}')`);
            })
                .NoValid(msg => {
                this.isExist = false;
                this.isLogin = false;
                this.message.register = Object.assign(Object.assign({}, msg), { status: "register no valid" });
            });
        }
        return this;
    }
    DeleteDB() {
        this.DeleteSync({ where: `username='${this.username}'` });
        this.isExist = false;
    }
    createToken() {
        if (this.isLogin) {
            let token = (0, importAll_1.RandomString)(40);
            this.UpdateSync({ update: { token: token }, where: `username='${this.username}'` });
            this.token = token;
        }
    }
    removeToken() {
        if (this.isExist) {
            this.UpdateSync({ update: { token: '' } });
            this.token = null;
        }
    }
    GetAvatarsClient() {
        let result = this.avatars.map(ava => ava.GetModelClient());
        return result;
    }
    UpdateActiveAvatar(avatar) {
        if (!avatar) {
            this.isSelectedAvatar = false;
            this.activeAvatar = null;
            return;
        }
        this.activeAvatar = this.avatars.find(a => a.GetId() == avatar.GetId());
        this.isSelectedAvatar = this.activeAvatar ? true : false;
    }
    GetModelClient() {
        return {
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            birthday: this.birthday,
            registerDate: this.registerDate,
            token: this.token,
        };
    }
    SetActiveAvatar(avatarID) {
        let findAvatar = this.avatars.find(ava => ava.GetId() == avatarID);
        if (findAvatar) {
            this.activeAvatar = findAvatar;
            return true;
        }
        return false;
    }
    canCreteNewAvatar() {
        return true; /// להשלים
    }
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            let user = [];
            new importAll_1.Database().SelectSync({
                Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
                from: "users",
                where: "1=1"
            }).ValidDB(data => {
                data.forEach(usr => user.push(new User(usr)));
                resolve(user);
            })
                .NoValidDB(err => reject(err));
        });
    }
    static getAllUsersSync() {
        let user = [];
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
        })
            .ValidDB(data => data.forEach(u => user.push(new User(u))));
        return user;
    }
    static GetUserByUsername(username) {
        let user = null;
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
            where: `username='${username}'`
        })
            .ValidDB(data => user = new User(data[0]));
        return user;
    }
    static GetUserByToken(token) {
        let user = new User;
        if (!token)
            return user;
        if (token.length < 10)
            return user;
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
            where: `token='${token}'`
        })
            .ValidDB(data => user = new User(data[0], true));
        return user;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map