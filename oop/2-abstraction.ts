class Car {
  private brand: string;
  private model: string;
  private speed: number;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  public accelerate(): void {
    this.speed += 10;
  }

  public brake(): void {
    this.speed -= 10;
  }

  public getSpeed(): number {
    return this.speed;
  }
}

// Create a car object
const myCar: Car = new Car("Toyota", "Camry");

// Accelerate the car
myCar.accelerate();

// Get the current speed
console.log("Current speed:", myCar.getSpeed());
