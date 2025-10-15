class Circle extends GeometricObject {
  private radius: number;

  constructor(radius: number = 1.0, color: string = "white", filled: boolean = false) {
    super(color, filled);
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): void {
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  public getDiameter(): number {
    return 2 * this.radius;
  }

  public printCircle(): void {
    console.log(`The circle was created on ${this.getDateCreated()} and the radius is ${this.radius}`);
  }
}