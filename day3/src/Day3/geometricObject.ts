export class GeometricObject {
  private color: string;
  private filled: boolean;
  private dateCreated: Date;

  constructor(color: string, filled: boolean) {
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
    return "Color: "+this.color+" Filled: "+this.filled+" Created: "+this.dateCreated.toDateString();
  }
}