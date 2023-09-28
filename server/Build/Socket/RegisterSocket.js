"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function RegisterSocket(socket) {
    //RegisterForm
    socket.on("Register-Me", function (data) {
        if (!socket.user.IsExist()) {
            socket.user = new importAll_1.User().Register(data);
            if (socket.user.IsExist())
                socket.emit("Register-You", socket.user.message.register);
            else
                socket.emit("Register-Not-Valid", socket.user.message.register);
        }
        else
            socket.emit("Register-Not-Valid");
    });
}
exports.default = RegisterSocket;
//# sourceMappingURL=RegisterSocket.js.map