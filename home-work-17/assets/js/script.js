let headerMenuBtn = document.querySelector('.menu__btn')
let headerNav = document.querySelector('.nav')
let navList = document.querySelector('.nav__list')

headerMenuBtn.addEventListener('click', function () {
  this.classList.toggle('active')
  headerNav.classList.toggle('active')
  setTimeout(() => {
    navList.classList.toggle('active')
  }, 200)
})
