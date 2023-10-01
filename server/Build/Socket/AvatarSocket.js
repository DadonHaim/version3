"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MustLoginSocket_1 = __importDefault(require("../MiddleWares/MustLoginSocket"));
const importAll_1 = require("./../importAll");
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
    socket.on("Avatar: Limit?", () => {
        if (socket.user.canCreteNewAvatar())
            socket.emit("Avatar: Sub-Limit");
        else
            socket.emit("Avatar: Limit-Over");
    });
    socket.On("Avatar: Give-Me-start-Items", [MustLoginSocket_1.default, LimitAvatarsSocket_1.default], () => {
        socket.emit("Avatar: Get-Start-Items", importAll_1.Item.GetStartItemsClient());
    });
}
exports.default = AvatarSocket;
//# sourceMappingURL=AvatarSocket.js.map