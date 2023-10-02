"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSettings = exports.LoginSettings = void 0;
//Server
const importAll_1 = require("../../importAll");
function LoginValidation(obj) {
    let valid = true;
    let message = {
        username: '',
        password: '',
        status: ''
    };
    if (!obj.username) {
        console.log(1);
        message.username = "שם משתמש חסר";
        valid = false;
    }
    if (!obj.password) {
        console.log(2);
        message.password = "סיסמה חסרה";
        valid = false;
    }
    if (obj.username && obj.password) {
        if (obj.username.length > LoginSettings.username.max) {
            message.username = "שם המשתמש ארוך מדי";
            valid = false;
        }
        ;
        if (obj.username.length < LoginSettings.username.min) {
            message.username = "שם המשתמש קצר מדי";
            valid = false;
        }
        ;
        if (obj.password.length < LoginSettings.password.min) {
            message.password = "הסיסמה קצרה מדי";
            valid = false;
        }
        ;
        if (obj.password.length > LoginSettings.password.max) {
            message.password = "הסיסמה ארוכה מדי";
            valid = false;
        }
        ;
    }
    return new importAll_1.ResultValid(message, valid);
}
exports.default = LoginValidation;
const LoginSettings = {
    username: { unique: true, require: true, min: 4, max: 14 },
    password: { unique: false, require: true, min: 6, max: 30 },
};
exports.LoginSettings = LoginSettings;
const RegisterSettings = {
    username: { unique: true, require: true, min: 4, max: 14 },
    email: { unique: true, require: true, min: 6, max: 50 },
    password: { unique: false, require: true, min: 6, max: 30 },
    firstName: { unique: false, require: false, min: 2, max: 12 },
    lastName: { unique: false, require: false, min: 2, max: 12 }
};
exports.RegisterSettings = RegisterSettings;
//# sourceMappingURL=LoginValidation.js.map