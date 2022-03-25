let pippo = document.querySelector('.header-right > a')
console.log(pippo)

pippo.addEventListener("click", pluto);

function pluto() {
    document.querySelector('.hamburger-menu').classList.add('active')
}

