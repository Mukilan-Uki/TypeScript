class Rectangle extends GeometricObject {
  private width: number;
  private height: number;

  constructor(width: number = 1.0, height: number = 1.0, color: string = "white", filled: boolean = false) {
    super(color, filled);
    this.width = width;
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number): void {
    this.width = width;class GeometricObject {
  private color: string;
  private filled: boolean;
  private dateCreated: Date;

  constructor(color: string = "white", filled: boolean = false) {
    this.color = color;
    this.filled = filled;
    this.dateCreated = new Date();
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public isFilled(): boolean {
    return this.filled;
  }

  public setFilled(filled: boolean): void {
    this.filled = filled;
  }

  public getDateCreated(): Date {
    return this.dateCreated;
  }

  public toString(): string {
    return `created on ${this.dateCreated.toLocaleString()}, color: ${this.color}, filled: ${this.filled}`;
  }
}
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}