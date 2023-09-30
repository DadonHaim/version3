"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importAll_1 = require("./../importAll");
function GuestSocket(socket) {
    socket.on("Start: Give-Me-Settings", () => {
        socket.emit("Start: Get-All-Settings", Object.assign(Object.assign({}, (0, importAll_1.GetSettings)().client), (0, importAll_1.GetSettings)().global));
    });
    //Token 
    socket.on("Start: With-Token", (token) => {
        socket.user = importAll_1.User.GetUserByToken(token);
        if (socket.user.IsLogin())
            socket.emit("Token-Valid", socket.user.GetModelClient());
        else
            socket.emit("Token-No-Valid", socket.user.message.login);
    });
    //LoginForm 
    socket.on("Login: Me", (data) => {
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
    //RegisterForm
    socket.on("Register: Me", (data) => {
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
exports.default = GuestSocket;
//# sourceMappingURL=GeustSocket.js.map