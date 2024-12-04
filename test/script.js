// let adminLogin = 'admin'
// let password = 'pass'
// let attemptsCount = 10
// function attemptDiscounter() {
//   attemptsCount--
//   alert(`Неправильні логін або пароль! У вас залишилось ${attemptsCount} спроб`)
// }
//
// function checkLogin(login, pass) {
//   if (attemptsCount > 0) {
//     let userName = prompt('Enter your name')
//     let userPass = prompt('Enter your password')
//     if (userName !== login || userPass !== pass) {
//       attemptDiscounter(attemptsCount)
//       checkLogin(adminLogin, password)
//     } else {
//       alert('Вхід виконано')
//     }
//   } else {
//     alert('Спроб більше немає')
//   }
// }
//
// checkLogin(adminLogin, password)

// let arrToThousand = []
//
// for (let i = 1; i <= 1000; i++) {
//   arrToThousand.push(i)
// }
//
// console.log(arrToThousand.length)
// let simpleSum = arrToThousand
//   .filter((value) => {
//     return value % 3 === 0 || value % 5 === 0
//   })
//   .reduce((acc, value) => {
//     return acc + value
//   }, 0)
//
// console.log(simpleSum)

// let i = 1;
// let sum = 0;
//
// while (i < 1000) {
//   i++;
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
//
// const person = {
//   name: "Stepan",
//   surname: "Bandera",
//   age: 33,
// };
//
// Object.defineProperties(person, {
//   name: { writable: true, configurable: false },
//   surname: { writable: true },
//   age: { writable: false, enumerable: false },
// });
//
// delete person.name;
// for (let key in person) {
//   console.log(key);
// }
//
// const toys = new Map();
//
// toys.set("car", 20);
// toys.set("plane", 50);
// toys.set("doll", 30);
// toys.set("cubes", 10);
// toys.set("puzzle", 15);
//
// console.log(toys.car);

// //1
// const country = 'Ukraine';
// console.log(country);
//
// //2
// let isStudent;
// isStudent = true;
// console.log(isStudent);
// isStudent = false;
// console.log(isStudent);
//
// //3
// let a = 2;
// let b = 5;
// let res = a * b;
// console.log(res);
//
// //4
// let str = 'строка';
// let num = 123;
//
// console.log(str, num);
//
// //7
// console.log(getStr('word'));
//
// function getStr(word) {
//   console.log(word);
//   // return word;
// }
//
// //8
// const getStr2 = function (str) {
//   return str;
// };
//
// //9
// const getStr3 = (str) => {
//   return str;
// };
//
// //10
//
// //Вертає різницю двох чисел
// let diff = (a, b) => a - b;
//
// //11
// setTimeout(() => {
//   console.log('Hi world');
// }, 5000);
//
// //12
// let user1 = { name: 'stepan', surname: 'Bandera', favoriteNumber: 15 };
// console.log(`My name is ${user1.name} ${user1.surname}`);
//
// //13
// let rndm = 'lorem10';
// console.log(rndm.length);
//
// //14
// const favoriteNumber = '12345';
//
// //16
// let arr = [1, 2, 3, 4];
// console.log(arr[0]);
// console.log(arr.length);
//
// //17
// let arr2 = [101, 'two', false];
// arr2[1] = 'three';
//
// //18
// arr2.forEach((el, i) => {
//   console.log(el, i);
// });
//
// //19
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr3.push('9', 10);
// arr3.pop('222');
// console.log(arr3);
//
// //20
// const date = new Date();
// const currentDate = date.getTime();
// console.log(date);
// console.log(currentDate);
//
// //21
// let myVar1 = 10;
// let myVar2 = '5';
//
// console.log(typeof parseInt(myVar1));
//
// //22
// console.log(3 || true || null || false);
//
// //24
// a += 1;
//
// //25
//
// //statement
// const myObj = {
//   x: 10,
//   y: 11,
// };
//
// function fn() {
//   console.log('hi from fn');
//   return function (a) {
//     console.log(a);
//   };
// }
//
// console.log(fn()(true));
//
// //26
// const marr = [1, 2]; // <-- Объявление переменной используя const
// marr.push(3);
// console.log(marr);
// // [1, 2, 3]
// // marr = [1, 2, 3, 4];
// // ДО: Uncaught TypeError: Assignment to constant variable.
// // ПОСЛЕ: Нет ошибки
// console.log(marr);
// // [1, 2, 3, 4]
//
// //31
//
// let i = 1;

// const messageInterval = setInterval(() => {
//   console.log(`Message number ${i}`);
//   i++;
// }, 2000);
//
// setInterval(() => {
//   clearInterval(messageInterval);
// }, 11000);

//32

// const myArr = [1, 2];
// myArr.unshift(3, 4);
// console.log(myArr);
// console.log();
//
// //34
// const cars = [
//   { carBrand: 'Honda', price: 12000, isSale: true },
//   { carBrand: 'Audi', price: 10000, isSale: true },
//   { carBrand: 'Toyota', price: 15000, isSale: false },
// ];
//
// cars.push({ carBrand: 'BMV', price: 15000, isSale: false });
//
// //35
//
// const myObj2 = {
//   name: 'mike',
//   age: 30,
//   city: 'London',
// };
//
// Object.prototype.country = 'England';
// for (let key in myObj2) {
//   console.log(myObj2[key]);
// }

class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = 'token';
  }

  doSomething() {
    setTimeout(
      function doAnotherThing() {
        console.log(this.numbers);
        this.numbers.forEach(
          function log(number) {
            //Cannot read property 'forEach' of undefined
            console.log(number);
            console.log(this.token);
          }.bind(this)
        );
      }.bind(this),
      100
    );
  }
}

let service = new Service();
service.doSomething();

// function askPassword(ok, fail) {
//   let password = prompt('Пароль?', '');
//   if (password === 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'Іван',
//
//   login(result) {
//     alert(this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу'));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

let newArr = [3, 2, 1];
console.log(newArr.join(' больше, чем '));

class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  logTransaction() {
    return console.log(`Balance was amounted on ${this.balance}`);
  }
}

let John = new BankAccount('John', 1000);
console.log('balance = ' + John.getBalance());
console.log(John.deposit(200));
console.log('balance = ' + John.getBalance());
