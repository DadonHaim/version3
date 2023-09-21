"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
var SocketVer2 = /** @class */ (function () {
    function SocketVer2(socket) {
        this.socket = socket;
        this.user = new importAll_1.User();
    }
    SocketVer2.prototype.On = function (id, call) {
        this.socket.on(id, function (data) {
            (0, importAll_1.DebugSocket)("client:\t " + id);
            call(data);
        });
    };
    SocketVer2.prototype.Emit = function (id, data) {
        (0, importAll_1.DebugSocket)("server:\t " + id);
        this.socket.emit(id, data);
    };
    return SocketVer2;
}());
exports.default = SocketVer2;
//# sourceMappingURL=Socket.js.map