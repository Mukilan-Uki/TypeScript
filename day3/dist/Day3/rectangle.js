"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const geometricObject_1 = require("./geometricObject");
class Rectangle extends geometricObject_1.GeometricObject {
    width;
    height;
    constructor(width, height, color, filled) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map