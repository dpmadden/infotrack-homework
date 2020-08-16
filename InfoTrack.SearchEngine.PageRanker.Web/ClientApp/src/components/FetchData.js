"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchData = void 0;
var React = require("react");
var FetchData = /** @class */ (function (_super) {
    __extends(FetchData, _super);
    function FetchData(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { currentCount: 0 };
        _this.incrementCounter = _this.incrementCounter.bind(_this);
        return _this;
    }
    FetchData.prototype.incrementCounter = function () {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    };
    FetchData.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a Damien component."),
            React.createElement("p", { "aria-live": "polite" },
                "Current count: ",
                React.createElement("strong", null, this.state.currentCount)),
            React.createElement("button", { className: "btn btn-primary", onClick: this.incrementCounter }, "Increment")));
    };
    FetchData.displayName = "Counter";
    return FetchData;
}(React.Component));
exports.FetchData = FetchData;
//# sourceMappingURL=FetchData.js.map