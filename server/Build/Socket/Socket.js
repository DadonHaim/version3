"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketVer2 = void 0;
const importAll_1 = require("./../importAll");
const AvatarSocket_1 = __importDefault(require("./AvatarSocket"));
const GeustSocket_1 = __importDefault(require("./GeustSocket"));
exports.default = (socket) => {
    (0, GeustSocket_1.default)(socket);
    (0, AvatarSocket_1.default)(socket);
};
class SocketVer2 {
    constructor(socket) {
        this.socket = socket;
        this.user = new importAll_1.User();
    }
    On(id, arr, call) {
        this.socket.on(id, (data) => {
            let Continue = arr.every((v, i) => { return arr[i](this); });
            (0, importAll_1.DebugSocket)("client:\t " + id);
            if (Continue)
                call(data);
        });
    }
    on(id, call) {
        this.socket.on(id, (data) => {
            (0, importAll_1.DebugSocket)("client:\t " + id);
            call(data);
        });
    }
    Emit(id, data) {
        (0, importAll_1.DebugSocket)("server:\t " + id);
        this.socket.emit(id, data);
    }
    emit(id, data) {
        (0, importAll_1.DebugSocket)("server:\t " + id);
        this.socket.emit(id, data);
    }
}
exports.SocketVer2 = SocketVer2;
//# sourceMappingURL=Socket.js.map