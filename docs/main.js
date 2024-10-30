console.log("#1. Приклад домашнього завдання з JavaScript");

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10,
  myStr = "some string",
  myBool = true,
  myArr = [1, 2, 3, 4, 5],
  myObj = { first: "First Name", last: "Last Name" };

document.write("Task 1: <br>");
document.write(
  `myNum: ${myNum}, myStr: ${myStr}, myBool: ${myBool}, myArr: ${myArr}, myObj: ${myObj} <br><br>`
);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

document.write("Task 2 :");
let decimal2 = (myNum / 3).toFixed(2);
document.write("<br> decimal2 = " + decimal2 + "<br>");
/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

document.write("<br>Task 3:<br>");
let i = 10;
document.write(`i = 10 <br>`);
let a = i++;
document.write(`postfix increment a = ${a} <br>`);

let b = ++i;
document.write(`prefix increment b = ${b} <br>`);

let c = i--;
document.write(`postfix decrement c = ${c} <br>`);

let d = --i;
document.write(`prefix decrement d = ${d} <br>`);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

document.write("<br>Task 4:<br>");

let myTest = 20;
// +=
myTest += myNum;
console.log(`myTest += myNum = ${myTest}`);
document.write(`myTest + myNum = ${myTest} <br>`);
// –=
myTest -= myNum;
console.log(`myTest -= myNum = ${myTest}`);
document.write(`myTest - myNum = ${myTest} <br>`);
// *=
myTest *= myNum;
console.log(`myTest *= myNum = ${myTest}`);
document.write(`myTest *= myNum = ${myTest} <br>`);
// /=
myTest /= myNum;
console.log(`myTest /= myNum = ${myTest};`);
document.write(`myTest /= myNum = ${myTest} <br>`);
// %=
myTest %= myNum;
console.log(`myTest %= myNum = ${myTest};`);
document.write(`myTest %= myNum = ${myTest} <br>`);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
document.write("<br>Task 5:<br>");

// константа Pi → myPi
let myPi = Math.PI;
document.write(`myPi = ${myPi}<br>`);

// округлене значення числа 89.279 → myRound
let myRound = Math.round(89.279);
document.write(`myRound = ${myRound}<br>`);

// випадкове число між 0..10 → myRandom
let myRandom = Math.round(Math.random() * 10);
document.write(`myRandom = ${myRandom}<br>`);

// 3 у 5 степені → myPow
let myPow = Math.pow(3, 5);
document.write(`myPow = ${myPow}<br>`);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
document.write("<br>Task 6:<br>");

let strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: String("Мама мыла раму, рама мыла маму").length,
};

document.write(
  `strObj.str = ${strObj.str}, <br> strObj.length = ${strObj.length} <br>`
);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
document.write("<br>Task 7:<br>");

// isRamaPos
let isRamaPos = strObj.str.indexOf("рама");
console.log(`isRamaPos = ${isRamaPos} <br>`);
document.write(`isRamaPos = ${isRamaPos} <br>`);

// isRama
let isRama = strObj.str.includes("рама");
console.log(`isRama = ${isRama} <br>`);
document.write(`isRama = ${isRama} <br>`);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
document.write("<br>Task 8:<br>");
let strReplace = strObj.str.replace("рама мыла", "Рама держит");
console.log(`strReplace = ${strReplace} <br>`);
document.write(`strReplace = ${strReplace} <br>`);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
document.write("<br>Task 9:<br>");

let someStr = "some STRING";
let upperStr = someStr.toUpperCase();
let lowerStr = someStr.toLowerCase();

console.log(`someStr = ${someStr} <br>`);
document.write(`someStr = ${someStr} <br>`);

console.log(`upperStr = ${upperStr} <br>`);
document.write(`upperStr = ${upperStr} <br>`);

console.log(`lowerStr = ${lowerStr} <br>`);
document.write(`lowerStr = ${lowerStr} <br>`);
