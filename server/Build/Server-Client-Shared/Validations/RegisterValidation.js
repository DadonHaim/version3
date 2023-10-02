"use strict";
//Server
/* - for Client
import {ResultValid,RegisterSettings} from "../../importAll";
*/
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("../../importAll");
function RegisterValidation(obj) {
    let valid = true;
    let message = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };
    if (!obj.username) {
        message.username = "שם משתמש חסר";
        valid = false;
    }
    if (!obj.password) {
        message.password = "סיסמה חסרה";
        valid = false;
    }
    if (!obj.email) {
        message.email = "אימיל חסר";
        valid = false;
    }
    if (obj.username && obj.password && obj.email) {
        if (obj.username.length > importAll_1.RegisterSettings.username.max) {
            message.username = "שם המשתמש ארוך מדי";
            valid = false;
        }
        if (obj.username.length < importAll_1.RegisterSettings.username.min) {
            message.username = "שם המשתמש קצר מדי";
            valid = false;
        }
        if (obj.password.length < importAll_1.RegisterSettings.password.min) {
            message.password = "הסיסמה קצרה מדי";
            valid = false;
        }
        if (obj.password.length > importAll_1.RegisterSettings.password.max) {
            message.password = "הסיסמה ארוכה מדי";
            valid = false;
        }
        if (obj.email.length < importAll_1.RegisterSettings.email.min) {
            message.email = "האימל קצר מדי";
            valid = false;
        }
        if (obj.email.length > importAll_1.RegisterSettings.email.max) {
            message.email = "האימל ארוך מדי";
            valid = false;
        }
        if (obj.firstName) {
            if (obj.firstName.length < importAll_1.RegisterSettings.firstName.min) {
                message.firstName = "שם פרטי קצר  מדי";
                valid = false;
            }
            if (obj.firstName.length > importAll_1.RegisterSettings.firstName.max) {
                message.firstName = "שם פרטי ארוך  מדי";
                valid = false;
            }
        }
        if (obj.lastName) {
            if (obj.lastName.length < importAll_1.RegisterSettings.lastName.min) {
                message.lastName = "שם משפחה קצר  מדי";
                valid = false;
            }
            if (obj.lastName.length > importAll_1.RegisterSettings.lastName.max) {
                message.lastName = "שם משפחה ארוך  מדי";
                valid = false;
            }
        }
    }
    new importAll_1.Database().QuerySync(`Select username,email from users where username = '${obj.username}'or email='${obj.email}'`)
        .ValidDB((data) => {
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