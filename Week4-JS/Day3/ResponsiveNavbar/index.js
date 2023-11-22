let icon = document.querySelector('.menu-icon')

let rightNav = document.querySelector('.right')


icon.addEventListener('click',()=>{
    rightNav.classList.toggle('show')
})