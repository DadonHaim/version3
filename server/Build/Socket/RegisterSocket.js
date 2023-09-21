"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function RegisterSocket(socket, user) {
    //RegisterForm
    socket.On("Register-Me", function (data) {
        if (!user.IsExist()) {
            user = new importAll_1.User().Register(data);
            if (user.IsExist())
                socket.Emit("Register-You");
            user.message.register;
        }
        else
            socket.Emit("Register-Not-Valid", { status: "register not valid" });
    });
}
exports.default = RegisterSocket;
//# sourceMappingURL=RegisterSocket.js.map