"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketVer2 = void 0;
var importAll_1 = require("./../importAll");
var AvatarSocket_1 = __importDefault(require("./AvatarSocket"));
var RegisterSocket_1 = __importDefault(require("./RegisterSocket"));
var SettingsSocket_1 = __importDefault(require("./SettingsSocket"));
exports.default = (function (socket) {
    (0, SettingsSocket_1.default)(socket);
    (0, importAll_1.LoginSocket)(socket);
    (0, RegisterSocket_1.default)(socket);
    (0, AvatarSocket_1.default)(socket);
});
var SocketVer2 = /** @class */ (function () {
    function SocketVer2(socket) {
        this.socket = socket;
        this.user = new importAll_1.User();
    }
    SocketVer2.prototype.On = function (id, obj, call) {
        var Continue = true;
        for (var key in obj)
            if (!obj[key](this)) {
                Continue = false;
                break;
            }
        if (Continue)
            this.socket.on(id, function (data) {
                (0, importAll_1.DebugSocket)("client:\t " + id);
                call(data);
            });
    };
    SocketVer2.prototype.on = function (id, call) {
        this.socket.on(id, function (data) {
            (0, importAll_1.DebugSocket)("client:\t " + id);
            call(data);
        });
    };
    SocketVer2.prototype.Emit = function (id, data) {
        (0, importAll_1.DebugSocket)("server:\t " + id);
        this.socket.emit(id, data);
    };
    SocketVer2.prototype.emit = function (id, data) {
        (0, importAll_1.DebugSocket)("server:\t " + id);
        this.socket.emit(id, data);
    };
    return SocketVer2;
}());
exports.SocketVer2 = SocketVer2;
//# sourceMappingURL=Socket.js.map