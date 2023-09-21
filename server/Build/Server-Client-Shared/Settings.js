"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSettings = exports.LoginSettings = void 0;
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
//# sourceMappingURL=Settings.js.map