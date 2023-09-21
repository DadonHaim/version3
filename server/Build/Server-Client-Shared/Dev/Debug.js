"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSocket = void 0;
function Debug(str) {
    if (process.env.npm_lifecycle_event === 'Debug' ||
        process.env.npm_lifecycle_event === 'DebugTest') {
        var file = __filename.split('\\');
        var index = file.length - 1;
        console.log("Debug:\t ".concat(file[index - 2], "\\").concat(file[index - 1], "\\").concat(file[index], ":\t ").concat(str));
    }
    else if (process.env.npm_lifecycle_event === 'Debug' && process.argv[2] == "client") {
        console.log(str);
    }
}
exports.default = Debug;
function DebugSocket(str) {
    if (process.env.npm_lifecycle_event === 'Debug' ||
        process.env.npm_lifecycle_event === 'DebugSocket') {
        console.log("Debug: ".concat(str));
    }
}
exports.DebugSocket = DebugSocket;
//# sourceMappingURL=Debug.js.map