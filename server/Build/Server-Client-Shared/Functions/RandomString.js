"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomString(num) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < num) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
exports.default = RandomString;
//# sourceMappingURL=RandomString.js.map