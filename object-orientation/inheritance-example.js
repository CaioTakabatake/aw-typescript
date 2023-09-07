var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Functionary = /** @class */ (function () {
    function Functionary(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Functionary.prototype.payTax = function (rate) {
        if (rate === void 0) { rate = 7.5; }
        console.log("Paying ".concat((this.salary * rate) / 100, " in taxes"));
    };
    return Functionary;
}());
var Secretary = /** @class */ (function (_super) {
    __extends(Secretary, _super);
    function Secretary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secretary;
}(Functionary));
var Executive = /** @class */ (function (_super) {
    __extends(Executive, _super);
    function Executive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Executive.prototype.payTax = function (rate) {
        if (rate === void 0) { rate = 27.5; }
        console.log("Executives pay more!");
        _super.prototype.payTax.call(this, rate);
    };
    return Executive;
}(Functionary));
var sarah = new Secretary("Sarah", 2000);
sarah.payTax();
var jorge = new Executive("Jorge", 30000);
jorge.payTax();
