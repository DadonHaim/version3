"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemClient {
    constructor(obj) {
        if (obj) {
            for (let key in obj)
                this[key] = obj[key];
        }
        else {
            this.name = "nul";
            this.gender = "boy";
        }
        this.image = `./items/${this.gender}/${this.categoryItem || ""}/${this.name}`;
    }
}
exports.default = ItemClient;
//# sourceMappingURL=ItemClient.js.map