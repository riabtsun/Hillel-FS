let menuBtn = document.querySelector('.menu-btn')
let navMenu = document.querySelector('.nav')

menuBtn && menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')

  if (menuBtn.classList.contains('active') && document.documentElement.clientWidth < 992) {
    navMenu.style.display = 'flex'
    navMenu.style.flexDirection = 'column'
  } else {
    navMenu.style.display = 'none'
  }

  if (document.documentElement.clientWidth >= 992) {
    navMenu.display = 'flex'
  }
})

