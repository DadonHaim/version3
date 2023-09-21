"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function LoginSocket(socket) {
    //Token 
    socket.On("Start-With-Token", function (token) {
        socket.user = importAll_1.User.GetUserByToken(token);
        if (socket.user.IsLogin())
            socket.Emit("Start-Token-Valid", socket.user.SendToClinet());
        else
            socket.Emit("Start-Token-No-Valid");
    });
    //LoginForm 
    socket.On("Login-Me", function (data) {
        console.log(33);
        if (socket.user.IsLogin())
            socket.Emit("Login-You-Are-Already");
        else {
            socket.user.Login(data);
            if (socket.user.IsLogin())
                socket.Emit("Login-You", socket.user.SendToClinet());
            else
                socket.Emit("Login-No-Valid", socket.user.message.login);
        }
    });
}
exports.default = LoginSocket;
//# sourceMappingURL=LoginSocket.js.map