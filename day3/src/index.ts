import { Circle } from "./Day3/circle";
import { Rectangle } from "./Day3/rectangle";

console.log("Circle Example");
console.log("\t");

const circle1 = new Circle(5, "blue", true);
circle1.printCircle();
console.log("Area:", Math.floor(circle1.getArea()));
console.log("Perimeter:", Math.floor(circle1.getPerimeter()));
console.log(circle1.toString());

console.log("\n");

console.log("Rectangle Example");
console.log("\t");
const rectangle1 = new Rectangle(4, 6, "red", false);
console.log("Area:", rectangle1.getArea());
console.log("Perimeter:", rectangle1.getPerimeter());
console.log(rectangle1.toString());