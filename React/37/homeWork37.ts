console.log('#20. TypeScript homework example file');

/*
 * #1
 *
 * Задача: Розробити функцію `createPerson`, яка створює об'єкт особи з заданими властивостями.
 *
 * Мета: Створити універсальну функцію, що дозволяє ефективно генерувати об'єкти особи з певними характеристиками для подальшого використання у програмі.
 *
 * Вимоги до реалізації:
 * 1. Функція має приймати три параметри: `name` (рядок), `age` (число), `isActive` (булеве значення) і явно повертати об'єкт, що відповідає інтерфейсу `PersonInterface`.
 * 2. Інтерфейс `PersonInterface` має описувати структуру об'єкта особи з властивостями `name`, `age`, і `isActive`.
 * 3. Функція має забезпечувати створення об'єкта з коректними типами властивостей відповідно до `PersonInterface`.
 * 4. Тип повернення функції має бути явно вказаний як `PersonInterface`, що забезпечує відповідність повернутого об'єкта визначеному інтерфейсу.
 *
 */

interface PersonInterface {
  name: string;
  age: number;
  isActive: boolean;
}

function createPerson(
  name: string,
  age: number,
  isActive: boolean
): PersonInterface {
  return {
    name,
    age,
    isActive,
  };
}

const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson);

/*
 * #1
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */

function LogMethodCalls(
  _target: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = propertyDescriptor.value;
  console.log(
    'Calling "${propertyName}" with arguments: "${JSON.stringify(arguments)}"'
  );

  propertyDescriptor.value = function (...args: any[]) {
    if (!args.length) {
      throw new Error('Method should be called with arguments');
    } else {
      return originalMethod.apply(this, args);
    }
  };
}

class Calculator {
  constructor(
    public num1: number,
    public num2: number
  ) {}
  @LogMethodCalls
  add(): number {
    return this.num1 + this.num2;
  }
  @LogMethodCalls
  multiply(): number {
    return this.num1 * this.num2;
  }
}
// const calculator = new Calculator()
// // "Calling "add" with arguments: 2, 3"
// console.log(calculator.add(2, 3)) // 5
// // "Calling "multiply" with arguments: 3, 4"
// console.log(calculator.multiply(3, 4)) // 12

/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace `UserProfile`, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині `UserProfile` інтерфейс `ProfileInterface`, який має містити властивості `id` (string), `name` (string) та `email` (string).
 * 3. Реалізувати функцію `createProfile` всередині `UserProfile`, яка приймає `name` та `email`, створює та повертає об'єкт `ProfileInterface` з унікальним `id`, вказаним ім'ям та електронною поштою.
 * 4. Функція `generateId` має бути приватною всередині `UserProfile` і слугувати для генерації унікального ідентифікатора для кожного профілю.
 *
 */

namespace UserProfile {
  export interface ProfileInterface {
    id: string;
    name: string;
    email: string;
  }

  export function createProfile(name: string, email: string): ProfileInterface {
    return { id: generateId(), name, email };
  }

  function generateId(): string {
    return (Math.random() * 1e8).toString(16);
  }
}

// const profile = UserProfile.createProfile('John Doe', 'john@example.com')
// console.log(profile) // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }

export { createPerson, Calculator, UserProfile };
