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

let i = 1
let sum = 0

while (i < 1000) {
  i++
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i
  }
}
console.log(sum)
