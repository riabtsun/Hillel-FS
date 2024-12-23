console.log('#11. JavaScript homework example file');

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  return !!email.match(/^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-z]{2,}$/);
}

console.log(isValidEmail('example@example.com')); // Повинно вивести: true
console.log(isValidEmail('invalid-email')); // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  return !!url.match(
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,10}$/
  );
}

console.log(isValidUrl('https://www.example.com')); // Повинно вивести: true
console.log(isValidUrl('invalid-url')); // Повинно вивести: false

// Експорт функції для використання та тестування
// export { isValidEmail, isValidUrl };
