"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function RegisterValidation(obj) {
    var valid = true;
    var message;
    if (!obj.username) {
        message.username = "שם משתמש חסר";
        message.status = "no-valid";
        valid = false;
    }
    else if (!obj.password) {
        message.password = "סיסמה חסרה";
        message.status = "no-valid";
        valid = false;
    }
    else if (!obj.email) {
        message.email = "אימיל חסר";
        message.status = "no-valid";
        valid = false;
    }
    else {
        if (obj.username.length > importAll_1.RegisterSettings.username.max) {
            message.username = "שם המשתמש ארוך מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.username.length < importAll_1.RegisterSettings.username.min) {
            message.username = "שם המשתמש קצר מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.password.length < importAll_1.RegisterSettings.password.min) {
            message.password = "הסיסמה קצרה מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.password.length > importAll_1.RegisterSettings.password.max) {
            message.password = "הסיסמה ארוכה מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.email.length < importAll_1.RegisterSettings.email.min) {
            message.email = "האימל קצר מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.email.length > importAll_1.RegisterSettings.email.max) {
            message.email = "האימל ארוך מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.firstName.length < importAll_1.RegisterSettings.firstName.min) {
            message.firstName = "שם פרטי קצר  מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.firstName.length > importAll_1.RegisterSettings.firstName.max) {
            message.firstName = "שם פרטי ארוך  מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.lastName.length < importAll_1.RegisterSettings.lastName.min) {
            message.lastName = "שם משפחה קצר  מדי";
            message.status = "no-valid";
            valid = false;
        }
        if (obj.lastName.length > importAll_1.RegisterSettings.lastName.max) {
            message.lastName = "שם משפחה ארוך  מדי";
            message.status = "no-valid";
            valid = false;
        }
    }
    new importAll_1.Database().QuerySync("Select username,email from users where username = '".concat(obj.username, "'or email='").concat(obj.email, "'"))
        .ValidDB(function (data) {
        if (data[0].username == obj.username) {
            message.username = "שם המשתמש כבר קיים";
            message.status = "no-valid";
            valid = false;
        }
        if (data[0].email == obj.email) {
            message.email = "אימייל כבר קיים";
            message.status = "no-valid";
            valid = false;
        }
    });
    return new importAll_1.ResultValid(message, valid);
}
exports.default = RegisterValidation;
//# sourceMappingURL=RegisterValidation.js.map