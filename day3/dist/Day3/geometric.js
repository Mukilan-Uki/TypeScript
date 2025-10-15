"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeometricObject {
    color;
    filled;
    dateCreated;
    constructor(color = "white", filled = false) {
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date();
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    toString() {
        return `created on ${this.dateCreated.toLocaleString()}, color: ${this.color}, filled: ${this.filled}`;
    }
}
class Circle extends GeometricObject {
    radius;
    constructor(radius = 1.0, color = "white", filled = false) {
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
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    printCircle() {
        console.log(`The circle was created on ${this.getDateCreated()} and the radius is ${this.radius}`);
    }
}
class Rectangle extends GeometricObject {
    width;
    height;
    constructor(width = 1.0, height = 1.0, color = "white", filled = false) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
        class GeometricObject {
            color;
            filled;
            dateCreated;
            constructor(color = "white", filled = false) {
                this.color = color;
                this.filled = filled;
                this.dateCreated = new Date();
            }
            getColor() {
                return this.color;
            }
            setColor(color) {
                this.color = color;
            }
            isFilled() {
                return this.filled;
            }
            setFilled(filled) {
                this.filled = filled;
            }
            getDateCreated() {
                return this.dateCreated;
            }
            toString() {
                return `created on ${this.dateCreated.toLocaleString()}, color: ${this.color}, filled: ${this.filled}`;
            }
        }
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
//# sourceMappingURL=geometric.js.map