"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AvatarSocket(socket) {
    //send all user avatars:
    socket.On("Avatar-Give-Me-List", function () {
        console.dir(socket.user.GetAvatarsForClients());
        socket.Emit("Avatar-Get-List", socket.user.GetAvatarsForClients());
    });
}
exports.default = AvatarSocket;
//# sourceMappingURL=AvatarSocket.js.map