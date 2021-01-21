"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var createUser_1 = require("../../useCase/createUser/");
var userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post('/createUser', function (req, res) { return createUser_1.createUserUseCase.execute(req, res); });
//# sourceMappingURL=router.js.map