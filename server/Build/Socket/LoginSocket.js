"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function LoginSocket(socket) {
    //Token 
    socket.on("Start-With-Token", function (token) {
        socket.user = importAll_1.User.GetUserByToken(token);
        if (socket.user.IsLogin())
            socket.emit("Start-Token-Valid", socket.user.GetModelClient());
        else
            socket.emit("Start-Token-No-Valid", socket.user.message.login);
    });
    //LoginForm 
    socket.on("Login-Me", function (data) {
        if (socket.user.IsLogin())
            socket.emit("Login-You-Are-Already");
        else {
            socket.user.Login(data);
            if (socket.user.IsLogin())
                socket.emit("Login-You", socket.user.GetModelClient());
            else
                socket.emit("Login-No-Valid", socket.user.message.login);
        }
    });
}
exports.default = LoginSocket;
//# sourceMappingURL=LoginSocket.js.map