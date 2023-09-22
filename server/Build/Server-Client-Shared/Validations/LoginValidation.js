"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (obj.username.length > importAll_1.LoginSettings.username.max) {
            message.username = "שם המשתמש ארוך מדי";
            valid = false;
        }
        ;
        if (obj.username.length < importAll_1.LoginSettings.username.min) {
            message.username = "שם המשתמש קצר מדי";
            valid = false;
        }
        ;
        if (obj.password.length < importAll_1.LoginSettings.password.min) {
            message.password = "הסיסמה קצרה מדי";
            valid = false;
        }
        ;
        if (obj.password.length > importAll_1.LoginSettings.password.max) {
            message.password = "הסיסמה ארוכה מדי";
            valid = false;
        }
        ;
    }
    return new importAll_1.ResultValid(message, valid);
}
exports.default = LoginValidation;
//# sourceMappingURL=LoginValidation.js.map