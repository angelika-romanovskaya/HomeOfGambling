let column1 = document.querySelectorAll('#first .column')
let column2 = document.querySelectorAll('#second .column')
let column3 = document.querySelectorAll('#third .column')
let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let home = document.querySelector('.home')
let footer = document.querySelector('.footer');
let en = document.querySelectorAll('.header_btn .btn')[0];
let social = document.querySelectorAll('.social_link svg');

window.addEventListener('resize', function(){
    if (window.innerWidth < 992) {
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

if (window.innerWidth < 992) {
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

burger.addEventListener('click', function(event){
    event.preventDefault();
    if(nav.classList.contains('hidden')){
        burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clip-path="url(#clip0_6842_13)">
        <path d="M22.1666 7.47825L20.5216 5.83325L13.9999 12.3549L7.47825 5.83325L5.83325 7.47825L12.3549 13.9999L5.83325 20.5216L7.47825 22.1666L13.9999 15.6449L20.5216 22.1666L22.1666 20.5216L15.6449 13.9999L22.1666 7.47825Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_6842_13">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    } else{
        burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4.66667 21H23.3333C23.975 21 24.5 20.475 24.5 19.8333C24.5 19.1917 23.975 18.6667 23.3333 18.6667H4.66667C4.025 18.6667 3.5 19.1917 3.5 19.8333C3.5 20.475 4.025 21 4.66667 21ZM4.66667 15.1667H23.3333C23.975 15.1667 24.5 14.6417 24.5 14C24.5 13.3583 23.975 12.8333 23.3333 12.8333H4.66667C4.025 12.8333 3.5 13.3583 3.5 14C3.5 14.6417 4.025 15.1667 4.66667 15.1667ZM3.5 8.16667C3.5 8.80833 4.025 9.33333 4.66667 9.33333H23.3333C23.975 9.33333 24.5 8.80833 24.5 8.16667C24.5 7.525 23.975 7 23.3333 7H4.66667C4.025 7 3.5 7.525 3.5 8.16667Z" fill="white"/>
      </svg>`
    }
    nav.classList.toggle('hidden')
    home.classList.toggle('hidden')
    footer.classList.toggle('hidden')
})

en.addEventListener('click', function(){
    if(en.querySelector('span').textContent === 'ru') en.querySelector('span').textContent = 'en'
    else en.querySelector('span').textContent = 'ru'
})

social.forEach((item)=>{
    item.addEventListener('mouseover', function(event){
        item.querySelector('path[fill="#478BF9"]').setAttribute('fill', "url(#linear-gradient)")
    })
})

social.forEach((item)=>{
    item.addEventListener('mouseout', function(event){
        item.querySelector('path[fill="url(#linear-gradient)"]').setAttribute('fill', "#478BF9")
    })
})
