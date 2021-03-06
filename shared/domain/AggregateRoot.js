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
exports.AggregateRoot = void 0;
var Entity_1 = require("./Entity");
var DomainEvent_1 = require("./event/DomainEvent");
var AggregateRoot = /** @class */ (function (_super) {
    __extends(AggregateRoot, _super);
    function AggregateRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._domainEvents = [];
        return _this;
    }
    Object.defineProperty(AggregateRoot.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AggregateRoot.prototype, "domainEvents", {
        get: function () {
            return this._domainEvents;
        },
        enumerable: false,
        configurable: true
    });
    AggregateRoot.prototype.addDomainEvent = function (domainEvent) {
        this._domainEvents.push(domainEvent);
        DomainEvent_1.DomainEvents.markAggregateDispatch(this);
        this.logDomainEventAdded(domainEvent);
    };
    AggregateRoot.prototype.clearEvents = function () {
        this._domainEvents.splice(0, this._domainEvents.length);
    };
    AggregateRoot.prototype.logDomainEventAdded = function (domainEvent) {
        var thisClass = Reflect.getPrototypeOf(this);
        var domainEventClass = Reflect.getPrototypeOf(domainEvent);
        console.info("[Domain Event Created]:", thisClass.constructor.name, '==>', domainEventClass.constructor.name);
    };
    return AggregateRoot;
}(Entity_1.Entity));
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=AggregateRoot.js.map