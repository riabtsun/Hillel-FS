/**
 * 1. Створити сутність "Людина".
 *
 * Властивості:
 * імʼя;
 * вік.
 * Методи:
 * конструктор, який приймає два параметри: імʼя та вік;
 * метод, який виводить у консоль інформацію про людину.
 * 2. Створити сутність "Автомобіль".
 *
 * Властивості:
 * марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
 * власник.
 * Методи:
 * конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
 * присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
 * метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
 * В якості демонстраціїї створити:
 *
 * декілька екземплярів класу Людина;
 * декілька екземплярів класу Автомобіль;
 * присвоїти власників автомобілям.
 */

class Man {
  constructor(name, age = 'unknown') {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`A person with name: ${this.name}, age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, numSign) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.numSign = numSign;
  }

  owner;

  setOwner(person) {
    person.age > 18
      ? (this.owner = person)
      : console.log(`Person ${person.name} can't own the car`);
  }

  carInfo() {
    console.log(
      `A car with brand: ${this.brand}, model: ${this.model}, year: ${this.year} numSign: ${this.numSign}`
    );
    if (this.owner) {
      console.log(`the owner is:`);
      this.owner.showInfo();
    }
  }
}

let person1 = new Man('Peter', 25);
let person2 = new Man('Jane');
let person3 = new Man('Bob', 14);

const car1 = new Car('Toyota', 'Camry', 2022, 'ABC123');
const car2 = new Car('Hyundai', 'Elantra', 2007, 'XYZ999');

car1.setOwner(person1);
car2.setOwner(person2);

car1.carInfo();
car2.carInfo();
// car3.setOwner(person3)
