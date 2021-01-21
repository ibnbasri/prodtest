"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
var Guard = /** @class */ (function () {
    function Guard() {
    }
    Guard.combine = function (guardResult) {
        for (var _i = 0, guardResult_1 = guardResult; _i < guardResult_1.length; _i++) {
            var results = guardResult_1[_i];
            if (results.success === false)
                return results;
        }
        return { success: true };
    };
    Guard.againstNullOrUndefinedBulk = function (args) {
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var arg = args_1[_i];
            var result = this.againstNullOrUndefined(arg.argument, arg.argumentName);
            if (!result.success)
                return result;
        }
        return { success: true };
    };
    Guard.againstAtMost = function (numChars, text) {
        return text.length <= numChars
            ? { success: true }
            : {
                success: false,
                message: "Text is greater than " + numChars + " chars."
            };
    };
    Guard.againstAtLeast = function (numChar, text) {
        return text.length >= numChar ? { success: true } : {
            succeeded: false,
            message: "Text is greater than " + numChar + " chars."
        };
    };
    Guard.againstNullOrUndefined = function (argument, argumentName) {
        if (argument === null || argumentName === null) {
            return { success: false, message: argumentName + " is null" };
        }
        else {
            return { success: true };
        }
    };
    return Guard;
}());
exports.Guard = Guard;
//# sourceMappingURL=Guard.js.map