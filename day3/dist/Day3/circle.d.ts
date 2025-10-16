import { GeometricObject } from "./geometricObject";
export declare class Circle extends GeometricObject {
    private radius;
    constructor(radius: number, color: string, filled: boolean);
    getRadius(): number;
    setRadius(radius: number): void;
    getArea(): number;
    getPerimeter(): number;
    getDiameter(): number;
    printCircle(): void;
}
//# sourceMappingURL=circle.d.ts.map