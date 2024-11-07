const burger = document.querySelector('.menu-btn')
const mobileList = document.querySelector('.header-navList')

window.addEventListener("load", function (){
    burger.addEventListener('click', function () {
        this.classList.toggle('active')
        mobileList.classList.toggle('active')
    })
});