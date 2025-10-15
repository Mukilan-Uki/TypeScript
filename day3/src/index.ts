const circle = new Circle(5.0, "red", true);
console.log("A Circle:");
circle.printCircle();
console.log("Color:", circle.getColor());
console.log("Filled:", circle.isFilled());
console.log("Area:", circle.getArea().toFixed(2));
console.log("Perimeter:", circle.getPerimeter().toFixed(2));

console.log("\n---------------------------\n");

const rectangle = new Rectangle(4.0, 6.0, "blue", false);
console.log("A Rectangle:");
console.log("Width:", rectangle.getWidth());
console.log("Height:", rectangle.getHeight());
console.log("Color:", rectangle.getColor());
console.log("Filled:", rectangle.isFilled());
console.log("Area:", rectangle.getArea().toFixed(2));
console.log("Perimeter:", rectangle.getPerimeter().toFixed(2));