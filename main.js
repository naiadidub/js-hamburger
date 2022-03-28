let pippo = document.querySelector('.header-right > a')
let mars = document.querySelector('.close')

pippo.addEventListener("click", pluto);
mars.addEventListener("click", june)

function pluto() {
    document.querySelector('.hamburger-menu').classList.add('active')
}
function june() {
    document.querySelector('.hamburger-menu').classList.remove('active')
}

