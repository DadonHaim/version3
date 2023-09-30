"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSocket = void 0;
function Debug(str) {
    if (true) {
        // let file = __filename.split('\\')
        // let index = file.length-1
        // console.log( `Debug:\t ${file[index-2]}\\${file[index-1]}\\${file[index]}:\t ${str}` )
    }
    else {
        console.log(str);
    }
}
exports.default = Debug;
function DebugSocket(str) {
    if (true) {
        console.log(`Debug: ${str}`);
    }
}
exports.DebugSocket = DebugSocket;
//# sourceMappingURL=Debug.js.map