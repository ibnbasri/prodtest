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
exports.AppError = void 0;
var Result_1 = require("./Result");
var AppError;
(function (AppError) {
    var UnexpectedError = /** @class */ (function (_super) {
        __extends(UnexpectedError, _super);
        function UnexpectedError(err) {
            var _this = _super.call(this, false, {
                message: "An unexpected error occurred.",
                error: err
            }) || this;
            console.log("[AppError]: An unexpected error occurred");
            console.error(err);
            return _this;
        }
        UnexpectedError.create = function (err) {
            return new UnexpectedError(err);
        };
        return UnexpectedError;
    }(Result_1.Result));
    AppError.UnexpectedError = UnexpectedError;
})(AppError = exports.AppError || (exports.AppError = {}));
//# sourceMappingURL=AppError.js.map