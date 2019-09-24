"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x:' + this._x + ' Y :' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    Point.prototype.setX = function (val) {
        if (val < 0) {
            throw new Error("Value cannot be less than zero");
        }
        this._x = val;
    };
    Point.prototype.getX = function () {
        return this._x;
    };
    return Point;
}());
exports.Point = Point;
var point = new Point(12, 78);
point.setX(21);
point.draw();
