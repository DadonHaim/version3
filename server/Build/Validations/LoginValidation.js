"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("../importAll");
function LoginValidation(obj) {
    var messages = {
        username: '',
        password: '',
        status: ''
    };
    var valid = true;
    if (!obj.username) {
        messages.username = "שם משתמש חסר";
        valid = false;
        messages.status = "no-Valid";
    }
    else if (!obj.password) {
        messages.password = "סיסמה חסרה";
        valid = false;
        messages.status = "no-Valid";
    }
    else {
        if (obj.username.length > importAll_1.LoginSettings.username.max) {
            messages.status = "no-Valid";
            messages.username = "שם המשתמש ארוך מדי";
            valid = false;
        }
        if (obj.username.length < importAll_1.LoginSettings.username.min) {
            messages.status = "no-Valid";
            messages.username = "שם המשתמש קצר מדי";
            valid = false;
        }
        if (obj.password.length < importAll_1.LoginSettings.password.min) {
            messages.status = "no-Valid";
            messages.password = "הסיסמה קצרה מדי";
            valid = false;
        }
        if (obj.password.length > importAll_1.LoginSettings.password.max) {
            messages.status = "no-Valid";
            messages.password = "הסיסמה ארוכה מדי";
            valid = false;
        }
    }
    return new importAll_1.ResultValid(messages, valid);
}
exports.default = LoginValidation;
//# sourceMappingURL=LoginValidation.js.map