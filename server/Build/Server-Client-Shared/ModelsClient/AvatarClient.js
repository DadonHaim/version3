"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AvatarClient {
    constructor(obj) {
        if (obj)
            for (let key in obj)
                this[key] = obj[key];
    }
}
exports.default = AvatarClient;
//# sourceMappingURL=AvatarClient.js.map