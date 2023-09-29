"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSettings = exports.LoginSettings = void 0;
var importAll_1 = require("../../importAll");
function LoginValidation(obj) {
    var valid = true;
    var message = {
        username: '',
        password: '',
        status: ''
    };
    if (!obj.username) {
        message.username = "שם משתמש חסר";
        valid = false;
    }
    else if (!obj.password) {
        message.password = "סיסמה חסרה";
        valid = false;
    }
    else {
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
var LoginSettings = {
    username: { unique: true, require: true, min: 4, max: 14 },
    password: { unique: false, require: true, min: 6, max: 30 },
};
exports.LoginSettings = LoginSettings;
var RegisterSettings = {
    username: { unique: true, require: true, min: 4, max: 14 },
    email: { unique: true, require: true, min: 6, max: 50 },
    password: { unique: false, require: true, min: 6, max: 30 },
    firstName: { unique: false, require: false, min: 2, max: 12 },
    lastName: { unique: false, require: false, min: 2, max: 12 }
};
exports.RegisterSettings = RegisterSettings;
//# sourceMappingURL=LoginValidation.js.map