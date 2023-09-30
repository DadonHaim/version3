"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemClient {
    constructor(obj) {
        if (obj) {
            for (let key in obj)
                this[key] = obj[key];
        }
    }
}
exports.default = ItemClient;
//# sourceMappingURL=ItemClient.js.map