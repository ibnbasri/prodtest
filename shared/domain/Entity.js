"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var EntityID_1 = require("./EntityID");
var isEntity = function (v) {
    return v instanceof Entity;
};
var Entity = /** @class */ (function () {
    function Entity(props, id) {
        this._id = id ? id : new EntityID_1.EntityID();
        this.props = props;
    }
    Entity.prototype.equals = function (object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return false;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map