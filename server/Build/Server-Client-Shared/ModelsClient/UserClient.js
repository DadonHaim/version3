"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.CreateToken = function (token) {
        if (token)
            sessionStorage.setItem("token", token);
    };
    User.KillToken = function () {
        sessionStorage.removeItem("token");
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=UserClient.js.map