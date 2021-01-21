"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = require("../../../modules/users/infra/http/router");
var port = process.env.PORT || 3000;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/user', router_1.userRouter);
app.listen(port, function () {
    console.log("Application Running ON 3000");
});
//# sourceMappingURL=app.js.map