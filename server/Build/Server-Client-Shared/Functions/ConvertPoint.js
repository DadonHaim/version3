"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Server
function ConvertPoint(str) {
    if (!str)
        return [0, 0];
    let arr = str.split(',');
    return [
        Number.parseInt(arr[0]),
        Number.parseInt(arr[1])
    ];
}
exports.default = ConvertPoint;
//# sourceMappingURL=ConvertPoint.js.map