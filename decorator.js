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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var modelS = /** @class */ (function (_super) {
    __extends(modelS, _super);
    function modelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    modelS.prototype.cost = function () {
        return 77000;
    };
    return modelS;
}(Car));
var modelX = /** @class */ (function (_super) {
    __extends(modelX, _super);
    function modelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    modelX.prototype.cost = function () {
        return 77000;
    };
    return modelX;
}(Car));
var RearSeat = /** @class */ (function (_super) {
    __extends(RearSeat, _super);
    function RearSeat(car) {
        var _this = _super.call(this) || this;
        _this.decoratorCar = car;
        return _this;
    }
    RearSeat.prototype.getDescription = function () {
        return this.decoratorCar.getDescription() + "Reer Seat";
    };
    RearSeat.prototype.cost = function () {
        return this.decoratorCar.cost() + 2000;
    };
    return RearSeat;
}(CarOptions));
var SmartAirSuspension = /** @class */ (function (_super) {
    __extends(SmartAirSuspension, _super);
    function SmartAirSuspension(car) {
        var _this = _super.call(this) || this;
        _this.decoratorCar = car;
        return _this;
    }
    SmartAirSuspension.prototype.getDescription = function () {
        return this.decoratorCar.getDescription() + "Smart Air";
    };
    SmartAirSuspension.prototype.cost = function () {
        return this.decoratorCar.cost() + 12200;
    };
    return SmartAirSuspension;
}(CarOptions));
var myCar = new modelS();
myCar = new RearSeat(myCar);
myCar = new SmartAirSuspension(myCar);
console.log(myCar.getDescription());
console.log(myCar.cost());
