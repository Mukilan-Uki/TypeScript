"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const geometricObject_1 = require("./geometricObject");
class Circle extends geometricObject_1.GeometricObject {
    radius;
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    printCircle() {
        console.log("Circle radius: " + this.radius);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map