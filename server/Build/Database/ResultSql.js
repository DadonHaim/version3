"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResultSql {
    constructor(Data) {
        this.valid = false;
        this.Data = Data;
        if (Array.isArray(Data) &&
            Data[0] != null &&
            Object.keys(Data[0]).length > 0)
            this.valid = true;
    }
    ValidDB(callback) {
        if (this.valid)
            callback(this.Data);
        return this;
    }
    NoValidDB(callback) {
        if (!this.valid)
            callback(this.Data);
        return this;
    }
}
exports.default = ResultSql;
//# sourceMappingURL=ResultSql.js.map