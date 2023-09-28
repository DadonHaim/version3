"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MustLogin(socket) {
    socket.emit("Avatar-No-Creative-Limit-Max");
    return socket.user.IsLogin();
}
exports.default = MustLogin;
//# sourceMappingURL=MustLoginSocket.js.map