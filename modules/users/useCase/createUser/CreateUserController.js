"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(useCase) {
        this.useCase = useCase;
    }
    CreateUserController.prototype.execute = function (req, res) {
        var user = req.body;
        var result = this.useCase.execute(user);
        if (result.isLeft()) {
            var error = result.value;
            return res.json({ msg: error.errorValue() });
        }
        console.log(result);
        return res.json({ msg: "Hello" });
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map