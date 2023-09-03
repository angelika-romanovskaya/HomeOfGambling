let column1 = document.querySelectorAll('#first .column')
let column2 = document.querySelectorAll('#second .column')
let column3 = document.querySelectorAll('#third .column')
let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let home = document.querySelector('.home')

window.addEventListener("resize", function(event){
    event.preventDefault();
    if (window.screen.width < 992) {
        column1.forEach((item) => item.setAttribute('src', './icon/Drow.svg'))
        column2.forEach((item) => item.setAttribute('src', './icon/Worldrow.svg'))
        column3.forEach((item) => item.innerHTML = `<img src="./icon/row.svg" alt="row">
                                                    <img src="./icon/Crown.svg" alt="Crown">`)
     }
     else {
        column1.forEach((item) => item.setAttribute('src', './icon/D.svg'))
        column2.forEach((item) => item.setAttribute('src', './icon/World.svg'))
        column3.forEach((item) => item.innerHTML = `<img src="./icon/column.svg" alt="column">
                                                    <img src="./icon/Crown.svg" alt="Crown">`)
     }
})

burger.addEventListener('click', function(event){
    event.preventDefault();
    nav.classList.toggle('hidden')
    home.classList.toggle('hidden')
})

