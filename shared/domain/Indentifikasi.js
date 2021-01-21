"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indentifikasi = void 0;
var Indentifikasi = /** @class */ (function () {
    function Indentifikasi(value) {
        this.value = value;
        this.value = value;
    }
    Indentifikasi.prototype.equals = function (id) {
        if (id === undefined || id == null) {
            return false;
        }
        if (!(id instanceof this.constructor)) {
            return false;
        }
        return id.toValue() === this.value;
    };
    Indentifikasi.prototype.toString = function () {
        return String(this.value);
    };
    Indentifikasi.prototype.toValue = function () {
        return this.value;
    };
    return Indentifikasi;
}());
exports.Indentifikasi = Indentifikasi;
//# sourceMappingURL=Indentifikasi.js.map