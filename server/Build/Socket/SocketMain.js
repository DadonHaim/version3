"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var importAll_1 = require("./../importAll");
var AvatarSocket_1 = __importDefault(require("./AvatarSocket"));
var RegisterSocket_1 = __importDefault(require("./RegisterSocket"));
exports.default = (function (socket) {
    (0, importAll_1.LoginSocket)(socket);
    (0, RegisterSocket_1.default)(socket);
    (0, AvatarSocket_1.default)(socket);
});
//# sourceMappingURL=SocketMain.js.map