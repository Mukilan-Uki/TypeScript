import { GeometricObject } from "./geometricObject";
export declare class Rectangle extends GeometricObject {
    private width;
    private height;
    constructor(width: number, height: number, color: string, filled: boolean);
    getWidth(): number;
    setWidth(width: number): void;
    getHeight(): number;
    setHeight(height: number): void;
    getArea(): number;
    getPerimeter(): number;
}
//# sourceMappingURL=rectangle.d.ts.map