let headerMenuBtn = document.querySelector('.menu__btn')
let headerNav = document.querySelector('.nav')
let navList = document.querySelector('.nav__list')
const header = document.querySelector('.header')
const defaultOffset = 300
let lastScroll = 0

headerMenuBtn.addEventListener('click', function () {
  this.classList.toggle('active')
  headerNav.classList.toggle('active')
  setTimeout(() => {
    navList.classList.toggle('active')
  }, 200)
})

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide')

window.addEventListener('scroll', () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add('hide')
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide')
  }
  lastScroll = scrollPosition()
})
