"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MustLoginSocket_1 = __importDefault(require("../MiddleWares/MustLoginSocket"));
var LimitAvatarsSocket_1 = __importDefault(require("../MiddleWares/LimitAvatarsSocket"));
function AvatarSocket(socket) {
    //send all user avatars:
    socket.on("Avatar-Give-Me-List", function () {
        socket.emit("Avatar-Get-List", socket.user.GetAvatarsClient());
    });
    socket.On("Avatar-Create", { MustLogin: MustLoginSocket_1.default, LimitAvatars: LimitAvatarsSocket_1.default }, function () {
    });
}
exports.default = AvatarSocket;
//# sourceMappingURL=AvatarSocket.js.map