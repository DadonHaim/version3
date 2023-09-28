"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type IType = "backgroud"|"icon"|"magic";
function GetImage(type, name, ending) {
    if (ending === void 0) { ending = "png"; }
    var _image;
    var folder = "";
    switch (type) {
        case "backgroud":
            folder = "backgrounds";
            break;
        case "icon":
            folder = "icons";
            break;
        case "magic":
            folder = "magicsLogo";
            break;
    }
    try {
        _image = require("../../Images/".concat(folder, "/").concat(name, ".").concat(ending));
    }
    catch (_a) {
        console.log("image not found");
        _image = "";
    }
    return _image;
}
exports.default = GetImage;
//# sourceMappingURL=GetImage.js.map