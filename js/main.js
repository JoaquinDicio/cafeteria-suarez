function init(){
    window.addEventListener('scroll',checkScroll)
}

function checkScroll(){
    const navbar = document.querySelector('#header')
    if (window.scrollY > 150) {
        navbar.classList.add('on-scroll')
    } else {
        navbar.classList.remove('on-scroll')
    }
}
