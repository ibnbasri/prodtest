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
exports.UserName = void 0;
var Guard_1 = require("../../../shared/core/Guard");
var Result_1 = require("../../../shared/core/Result");
var ValueObject_1 = require("../../../shared/domain/ValueObject");
var UserName = /** @class */ (function (_super) {
    __extends(UserName, _super);
    function UserName(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(UserName.prototype, "value", {
        get: function () {
            return this.props.username;
        },
        enumerable: false,
        configurable: true
    });
    UserName.create = function (props) {
        var resultInput = Guard_1.Guard.againstNullOrUndefined(props.username, "username");
        if (!resultInput.success) {
            return Result_1.Result.fail(resultInput.message);
        }
        var minInput = Guard_1.Guard.againstAtLeast(this.minLength, props.username);
        if (!minInput.success) {
            return Result_1.Result.fail(minInput.message);
        }
        var maxInput = Guard_1.Guard.againstAtMost(this.maxLength, props.username);
        if (!maxInput.success) {
            return Result_1.Result.fail(maxInput.message);
        }
        return Result_1.Result.ok(new UserName(props));
    };
    UserName.maxLength = 15;
    UserName.minLength = 2;
    return UserName;
}(ValueObject_1.ValueObject));
exports.UserName = UserName;
//# sourceMappingURL=UserName.js.map