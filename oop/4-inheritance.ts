// Base class representing a generic shape
class Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Method to describe the shape
  describe(): void {
    console.log(`This is a shape at position (${this.x}, ${this.y}).`);
  }
}

// Derived class representing a circle
class Circle extends Shape {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y); // Call the constructor of the superclass (Shape)
    this.radius = radius;
  }

  // Method to calculate area of the circle
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(10, 20, 5);

circle.describe();
