"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MustLoginSocket_1 = __importDefault(require("../MiddleWares/MustLoginSocket"));
const LimitAvatarsSocket_1 = __importDefault(require("../MiddleWares/LimitAvatarsSocket"));
function AvatarSocket(socket) {
    //send all user avatars:
    socket.on("Avatar: Give-Me-List", () => {
        socket.emit("Avatar: Get-List", socket.user.GetAvatarsClient());
    });
    socket.on("Avatar: Give-Me-Active-Avatar", () => {
        var _a;
        socket.emit("Avatar: Get-Active-Avatar", (_a = socket.user.GetActiveAvatar()) === null || _a === void 0 ? void 0 : _a.GetModelClient());
    });
    socket.on("Avatar: Set-Active-Avatar", (avatarID) => {
        if (socket.user.SetActiveAvatar(avatarID))
            socket.emit("Avatar: Get-Active-Avatar", socket.user.GetActiveAvatar().GetModelClient());
        else
            socket.emit("Avatar: Not-Found");
    });
    socket.On("Avatar: Create", { MustLogin: MustLoginSocket_1.default, LimitAvatars: LimitAvatarsSocket_1.default }, () => {
    });
}
exports.default = AvatarSocket;
//# sourceMappingURL=AvatarSocket.js.map