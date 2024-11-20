console.log('#5. JavaScript homework example file');
let container = document.querySelector('.container');

container.innerText = `
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */`;

const counter = (() => {
  let count = 0;
  return (n) => {
    typeof n === 'number' ? (count = n) : count++;
    return count;
  };
})();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log(counter(0)); // 0
console.log(counter()); // 0
console.log(counter()); // 1
///
container.innerHTML += `<p>${counter()}</p>`; // 0
container.innerHTML += `<p>${counter()}</p>`; // 1
container.innerHTML += `<p>${counter(100)}</p>`; // 100
container.innerHTML += `<p>${counter()}</p>`; // 101
container.innerHTML += `<p>${counter()}</p>`; // 102
container.innerHTML += `<p>${counter(500)}</p>`; // 500
container.innerHTML += `<p>${counter()}</p>`; // 501
container.innerHTML += `<p>${counter()}</p>`; // 502
container.innerHTML += `<p>${counter(0)}</p>`; // 0
container.innerHTML += `<p>${counter()}</p>`; // 0
container.innerHTML += `<p>${counter()}</p>`; // 1

container.innerText += `
/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */`;

const counterFactory = (function () {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    value(n) {
      n ? (count = n) : (n = count);
      return n;
    },
  };
})();

console.log(counterFactory.value()); // 0
container.innerHTML += `<p>${counterFactory.value()}</p>`;
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
container.innerHTML += `<p>${counterFactory.value()}</p>`;
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
container.innerHTML += `<p>${counterFactory.value()}</p>`;
console.log(counterFactory.value(100)); // 100
container.innerHTML += `<p>${counterFactory.value()}</p>`;
counterFactory.decrement();
console.log(counterFactory.value()); // 99
container.innerHTML += `<p>${counterFactory.value()}</p>`;
console.log(counterFactory.value(200)); // 200
container.innerHTML += `<p>${counterFactory.value()}</p>`;
counterFactory.increment();
console.log(counterFactory.value()); // 201
container.innerHTML += `<p>${counterFactory.value()}</p>`;

container.innerText += `/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */`;

const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, callback) => {
  const myPow = (x, n) => {
    return n === 0 ? 1 : n < 0 ? 1 / myPow(x, -b) : x * myPow(x, n - 1);
  };
  const result = myPow(a, b);
  return callback(a, b, result);
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25

container.innerHTML += `<p>${myPow(3, 4, myPrint)}</p>`;
container.innerHTML += `<p>${myPow(2, 3, myPrint)}</p>`;
container.innerHTML += `<p>${myPow(2, 0, myPrint)}</p>`;
container.innerHTML += `<p>${myPow(2, -2, myPrint)}</p>`;

container.innerText += `/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */`;

const list = [12, 23, 100, 34, 56, 9, 233];
const myMax = (arr) => Math.max.apply(list, arr);

console.log(myMax(list)); // 233
container.innerHTML += `<p>${myMax(list)}</p>`;

container.innerText += `/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */`;
const myMul = (a, b) => a * b;

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = myMul.bind(null, 2);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10

container.innerHTML += `<p>${myDouble(3)}</p>`;
container.innerHTML += `<p>${myDouble(4)}</p>`;
container.innerHTML += `<p>${myDouble(5)}</p>`;

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = myMul.bind(null, 3);

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15

container.innerHTML += `<p>${myTriple(3)}</p>`;
container.innerHTML += `<p>${myTriple(4)}</p>`;
container.innerHTML += `<p>${myTriple(5)}</p>`;
// export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }
