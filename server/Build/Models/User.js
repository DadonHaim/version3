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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    //#region Method
    function User(obj, login) {
        if (login === void 0) { login = false; }
        var _this = _super.call(this, { tableName: "users" }) || this;
        _this.username = null; //{get;}                       
        _this.email = null; //{get; set;}                   
        _this.firstName = null; //{get; set;}                       
        _this.lastName = null; //{get; set;}                       
        _this.birthday = null; //{get; set;}                       
        _this.registerDate = null; //{get;}                           
        _this.banned = null; //{get;}                   
        _this.freeze = null; //{get;}                   
        _this.token = null; //{get;}            
        _this.message = {
            login: { username: '', password: '', status: '' },
            register: {}
        };
        _this.isExist = false; //{get;}         
        _this.isLogin = false; //{get;}         
        _this.isSelectedAvatar = false; //{get; set;}                     
        _this.avatars = []; //{get;}
        _this.GetUsername = function () { return _this.username; };
        _this.GetEmail = function () { return _this.email; };
        _this.GetFirstName = function () { return _this.firstName; };
        _this.GetLastName = function () { return _this.lastName; };
        _this.GetBirthday = function () { return _this.birthday; };
        _this.GetRegisterDate = function () { return _this.registerDate; };
        _this.GetBanned = function () { return _this.banned; };
        _this.GetFreeze = function () { return _this.freeze; };
        _this.GetToken = function () { return _this.token; };
        _this.GetAvatars = function () { return _this.avatars; };
        _this.GetActiveAvatar = function () { return _this.activeAvatar; };
        _this.IsExist = function () { return _this.isExist; };
        _this.IsLogin = function () { return _this.isLogin; };
        _this.IsSelectedAvatar = function () { return _this.isSelectedAvatar; };
        _this.setEmail = function (value) { _this.email = value; };
        _this.setFirstName = function (value) { _this.firstName = value; };
        _this.setLastName = function (value) { _this.lastName = value; };
        _this.setBirthday = function (value) { _this.birthday = value; };
        _this.setIsSelectedAvatar = function (value) { _this.isSelectedAvatar = value; };
        if (obj)
            for (var key in obj)
                _this[key] = obj[key];
        _this.isExist = _this.username ? true : false;
        login ? _this.ILogin() : _this.isLogin = false;
        return _this;
    }
    User.prototype.ILogin = function () {
        this.isLogin = true;
        this.avatars = importAll_1.Avatar.GetAvatarsByUser(this);
    };
    User.prototype.Logout = function () {
        if (this.isLogin) {
            this.removeToken();
            this.isLogin = false;
        }
        return this;
    };
    User.prototype.Login = function (obj) {
        var _this = this;
        if (!this.isLogin) {
            (0, importAll_1.LoginValidation)(obj).Valid(function () {
                _this.SelectSync({
                    Fields: ["username", "email", "firstName", "lastName", "registerDate", "birthday", "freeze", "token"],
                    where: "username ='".concat(obj.username, "' and password = '").concat(obj.password, "'")
                })
                    .ValidDB(function (data) {
                    for (var key in data[0])
                        _this[key] = data[0][key];
                    _this.isExist = true;
                    _this.isLogin = true;
                    _this.createToken();
                    _this.avatars = importAll_1.Avatar.GetAvatarsByUser(_this);
                })
                    .NoValidDB(function () {
                    _this.isExist = false;
                    _this.isLogin = false;
                    _this.message.login = { status: "login no valid" };
                });
            }).NoValid(function (msgs) { return _this.message.login = __assign(__assign({}, msgs), { status: "login no valid" }); });
        }
        return this;
    };
    User.prototype.Register = function (obj) {
        var _this = this;
        if (!this.isLogin) {
            (0, importAll_1.RegisterValidation)(obj).Valid(function () {
                _this.isExist = true;
                _this.isLogin = false;
                _this.username = obj.username;
                _this.QuerySync("insert into users (username,password,email,firstName,lastName) Values ('".concat(obj.username, "','").concat(obj.password, "','").concat(obj.email, "','").concat(obj.firstName, "','").concat(obj.lastName, "')"));
            })
                .NoValid(function (msg) {
                _this.isExist = false;
                _this.isLogin = false;
                _this.message.register = __assign(__assign({}, msg), { status: "register no valid" });
            });
        }
        return this;
    };
    User.prototype.DeleteDB = function () {
        this.DeleteSync({ where: "username='".concat(this.username, "'") });
        this.isExist = false;
    };
    User.prototype.createToken = function () {
        if (this.isLogin) {
            var token = (0, importAll_1.RandomString)(40);
            this.UpdateSync({ update: { token: token }, where: "username='".concat(this.username, "'") });
            this.token = token;
        }
    };
    User.prototype.removeToken = function () {
        if (this.isExist) {
            this.UpdateSync({ update: { token: '' } });
            this.token = null;
        }
    };
    User.prototype.GetAvatarsClient = function () {
        return this.avatars.map(function (ava) { return ava.GetModelClient(); });
    };
    User.prototype.UpdateActiveAvatar = function (avatar) {
        if (!avatar) {
            this.isSelectedAvatar = false;
            this.activeAvatar = null;
            return;
        }
        this.activeAvatar = this.avatars.find(function (a) { return a.GetId() == avatar.GetId(); });
        this.isSelectedAvatar = this.activeAvatar ? true : false;
    };
    User.prototype.GetModelClient = function () {
        return {
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            birthday: this.birthday,
            registerDate: this.registerDate,
            token: this.token,
        };
    };
    User.prototype.canCreteNewAvatar = function () {
        return true; /// להשלים
    };
    User.getAllUsers = function () {
        return new Promise(function (resolve, reject) {
            var user = [];
            new importAll_1.Database().SelectSync({
                Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
                from: "users",
                where: "1=1"
            }).ValidDB(function (data) {
                data.forEach(function (usr) { return user.push(new User(usr)); });
                resolve(user);
            })
                .NoValidDB(function (err) { return reject(err); });
        });
    };
    User.getAllUsersSync = function () {
        var user = [];
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
        })
            .ValidDB(function (data) { return data.forEach(function (u) { return user.push(new User(u)); }); });
        return user;
    };
    User.GetUserByUsername = function (username) {
        var user = null;
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
            where: "username='".concat(username, "'")
        })
            .ValidDB(function (data) { return user = new User(data[0]); });
        return user;
    };
    User.GetUserByToken = function (token) {
        var user = new User;
        if (!token)
            return user;
        if (token.length < 10)
            return user;
        new importAll_1.Database().SelectSync({
            Fields: ['username', 'email', 'firstName', 'lastName', 'birthday', 'registerDate', 'freeze', 'token'],
            from: "users",
            where: "token='".concat(token, "'")
        })
            .ValidDB(function (data) { return user = new User(data[0], true); });
        return user;
    };
    return User;
}(importAll_1.Database));
exports.default = User;
//# sourceMappingURL=User.js.map