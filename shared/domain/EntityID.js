"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityID = void 0;
var uuid_1 = require("uuid");
var Indentifikasi_1 = require("./Indentifikasi");
var EntityID = /** @class */ (function (_super) {
    __extends(EntityID, _super);
    function EntityID(id) {
        return _super.call(this, id ? id : uuid_1.v4()) || this;
    }
    return EntityID;
}(Indentifikasi_1.Indentifikasi));
exports.EntityID = EntityID;
//# sourceMappingURL=EntityID.js.map