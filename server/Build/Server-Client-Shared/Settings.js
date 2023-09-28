"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSettings = exports.LoginSettings = exports.Settings = void 0;
var importAll_1 = require("../importAll");
var Settings = /** @class */ (function () {
    function Settings() {
        var _this = this;
        new importAll_1.Database().QuerySync("select * from settings_client")
            .ValidDB(function (setting) {
            _this.CONTAINER_APP_GRID = setting[0].CONTAINER_APP_GRID || "";
            _this.GUEST_HEADER_POSITION = setting[0].GUEST_HEADER_POSITION || "";
            _this.GUEST_MENU_POSITION = setting[0].GUEST_MENU_POSITION || "";
            _this.GUEST_MAIN_POSITION = setting[0].GUEST_MAIN_POSITION || "";
            _this.GUEST_FOOTER_POSITION = setting[0].GUEST_FOOTER_POSITION || "";
            _this.GUEST_COPYRIGHT_POSITION = setting[0].GUEST_COPYRIGHT_POSITION || "";
            _this.AVATAR_VIEW_GRID = setting[0].AVATAR_VIEW_GRID || "";
            _this.GIRL_AVATAR_BODY_POSITION = setting[0].GIRL_AVATAR_BODY_POSITION || "";
            _this.GIRL_SHIRT_POSITION = setting[0].GIRL_SHIRT_POSITION || "";
            _this.GIRL_SHOES_POSITION = setting[0].GIRL_SHOES_POSITION || "";
            _this.GIRL_PANTS_POSITION = setting[0].GIRL_PANTS_POSITION || "";
            _this.BOY_AVATAR_BODY_POSITION = setting[0].BOY_AVATAR_BODY_POSITION || "";
            _this.BOY_SHIRT_POSITION = setting[0].BOY_SHIRT_POSITION || "";
            _this.BOY_SHOES_POSITION = setting[0].BOY_SHOES_POSITION || "";
            _this.BOY_PANTS_POSITION = setting[0].BOY_PANTS_POSITION || "";
        });
    }
    return Settings;
}());
exports.Settings = Settings;
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
//fadsfasf  
//# sourceMappingURL=Settings.js.map