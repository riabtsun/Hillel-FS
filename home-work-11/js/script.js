let menuBtn = document.querySelector('.menu-btn')
let navMenu = document.querySelector('.nav')

menuBtn && menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  navMenu.classList.toggle('active')
})

