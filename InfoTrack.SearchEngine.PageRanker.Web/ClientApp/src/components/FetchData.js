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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchData = void 0;
var React = require("react");
var reactstrap_1 = require("reactstrap");
var FetchData = /** @class */ (function (_super) {
    __extends(FetchData, _super);
    function FetchData(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            url: '',
            searchTerm: 'online title search',
            results: []
        };
        _this.handleUrlChange = _this.handleUrlChange.bind(_this);
        _this.handleSearchTermChange = _this.handleSearchTermChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    FetchData.prototype.handleUrlChange = function (event) {
        this.setState({ url: event.target.value });
    };
    FetchData.prototype.handleSearchTermChange = function (event) {
        this.setState({ searchTerm: event.target.value });
    };
    FetchData.prototype.handleSubmit = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        return [4 /*yield*/, fetch('/page-rank/search', {
                                method: 'post',
                                body: JSON.stringify({
                                    searchTerm: this.state.searchTerm,
                                    url: this.state.url
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                                var response;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, r.json()];
                                        case 1:
                                            response = (_a.sent());
                                            this.setState({ results: __spreadArrays([response], this.state.results).slice(0, 10) });
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FetchData.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement("h1", null, "URL Page Rank"),
                    React.createElement(reactstrap_1.Form, { onSubmit: this.handleSubmit },
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { className: "w-50" },
                                "Search term:",
                                React.createElement(reactstrap_1.Input, { type: "text", value: this.state.searchTerm, onChange: this.handleSearchTermChange, required: true }))),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { className: "w-50" },
                                "URL:",
                                React.createElement(reactstrap_1.Input, { type: "url", value: this.state.url, onChange: this.handleUrlChange, required: true }))),
                        React.createElement("input", { type: "submit", value: "Submit", className: "btn btn-primary" })))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { className: "mt-5" },
                    React.createElement("h2", null, "Last 10 Search Results"))),
            this.state.results.length <= 0 && React.createElement("p", null, "No results to display."),
            this.state.results.length > 0 && this.state.results.map(function (r, resultIdx) { return (React.createElement("div", { className: "search-history-item", key: resultIdx },
                React.createElement("span", { className: "font-weight-bold" }, r.searchTerm),
                React.createElement("br", null),
                r.uri,
                React.createElement("br", null),
                React.createElement("div", { className: "d-flex" }, r.results.map(function (result, idx) { return (React.createElement("div", { className: result.urlFound ? 'search-result found' : 'search-result not-found', key: result.searchEngineName + "-" + idx },
                    result.pageRank ? "#" + result.pageRank : '-',
                    React.createElement("small", null, result.searchEngineName))); })))); })));
    };
    FetchData.displayName = "Counter";
    return FetchData;
}(React.Component));
exports.FetchData = FetchData;
//# sourceMappingURL=FetchData.js.map