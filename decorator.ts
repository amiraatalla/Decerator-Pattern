abstract class Car {
  public description: string;
  public getDescription() {
    return this.description;
  }
  public abstract cost(): number;
}

abstract class CarOptions extends Car {
  decoratorCar: Car;
  abstract getDescription(): string;
  //   abstract cost(): number;
}

class modelS extends Car {
  public description = "Model S";
  public cost(): number {
    return 77000;
  }
}

class modelX extends Car {
  public description = "Model X";
  public cost(): number {
    return 77000;
  }
}

class RearSeat extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratorCar = car;
  }
  getDescription(): string {
    return this.decoratorCar.getDescription() + "Reer Seat";
  }
  public cost(): number {
    return this.decoratorCar.cost() + 2000;
  }
}

class SmartAirSuspension extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratorCar = car;
  }
  getDescription(): string {
    return this.decoratorCar.getDescription() + "Smart Air";
  }
  public cost(): number {
    return this.decoratorCar.cost() + 12200;
  }
}

let myCar = new modelS();
myCar = new RearSeat(myCar);
myCar = new SmartAirSuspension(myCar);
console.log(myCar.getDescription());
console.log(myCar.cost());

