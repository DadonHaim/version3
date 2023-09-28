"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
function SettingsSocket(socket) {
    socket.on("Start-Give-Me-Settings", function () {
        var setting = new importAll_1.Settings();
        socket.emit("Start-Get-Settings", setting);
    });
}
exports.default = SettingsSocket;
//# sourceMappingURL=SettingsSocket.js.map