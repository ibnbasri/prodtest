"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
var Result_1 = require("../../../../shared/core/Result");
var UserName_1 = require("../../domain/UserName");
var UserPassword_1 = require("../../domain/UserPassword");
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase() {
    }
    CreateUserUseCase.prototype.execute = function (request) {
        var usernameResult = UserName_1.UserName.create({ username: request.username });
        var passwordResult = UserPassword_1.UserPassword.create({ value: request.password });
        var result = Result_1.Result.combine([usernameResult, passwordResult]);
        if (result.isFailure) {
            return Result_1.left(Result_1.Result.fail(result.error));
        }
        var username = usernameResult.getValue();
        var password = passwordResult.getValue();
        return Result_1.right(Result_1.Result.ok({ username: username, password: password }));
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map