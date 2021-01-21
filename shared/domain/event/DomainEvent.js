"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvents = void 0;
var DomainEvents = /** @class */ (function () {
    function DomainEvents() {
    }
    DomainEvents.markAggregateDispatch = function (aggregate) {
        var found = !!this.findMarkedAggregateByID(aggregate.id);
        if (!found) {
            this.markedAggregates.push(aggregate);
        }
    };
    DomainEvents.dispatchAggregateEvent = function (aggregate) {
        var _this = this;
        aggregate.domainEvents.forEach(function (event) { return _this.dispatch(event); });
    };
    DomainEvents.removeAggregateMarkFromList = function (aggregate) {
        var index = this.markedAggregates.findIndex(function (a) { return a.equals(aggregate); });
        this.markedAggregates.splice(index, 1);
    };
    DomainEvents.dispatchEvent = function (id) {
        var aggregate = this.findMarkedAggregateByID(id);
        if (aggregate) {
            this.dispatch(aggregate);
            aggregate.clearEvents();
            this.removeAggregateMarkFromList(aggregate);
        }
    };
    DomainEvents.findMarkedAggregateByID = function (id) {
        var found = null;
        for (var _i = 0, _a = this.markedAggregates; _i < _a.length; _i++) {
            var aggregate = _a[_i];
            if (aggregate.id.equals(id)) {
                found = aggregate;
            }
        }
        return found;
    };
    DomainEvents.register = function (callback, eventName) {
        if (!this.markedAggregates.hasOwnProperty(eventName)) {
            this.handlersMap[eventName] = [];
        }
        this.handlersMap[eventName].push(callback);
    };
    DomainEvents.clearHandlers = function () {
        this.handlersMap = {};
    };
    DomainEvents.clearMarkedAggregates = function () {
        this.markedAggregates = [];
    };
    DomainEvents.dispatch = function (event) {
        var eventName = event.constructor.name;
        if (this.handlersMap.hasOwnProperty(eventName)) {
            var handlers = this.handlersMap[eventName];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                handler(event);
            }
        }
    };
    DomainEvents.markedAggregates = [];
    DomainEvents.handlersMap = {};
    return DomainEvents;
}());
exports.DomainEvents = DomainEvents;
//# sourceMappingURL=DomainEvent.js.map