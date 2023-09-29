"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function GuestSocket(socket) {
    socket.on("Start-Give-Me-Settings", function () {
        socket.emit("Start-Get-Settings", __assign(__assign({}, (0, importAll_1.GetSettings)().client), (0, importAll_1.GetSettings)().global));
    });
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
exports.default = GuestSocket;
//# sourceMappingURL=GeustSocket.js.map