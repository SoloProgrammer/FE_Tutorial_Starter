let MyMenu = document.querySelector('.account-menus')

console.log("Connected..");

const handleMenuToggle = () => {
    console.log(MyMenu);
    MyMenu.classList.toggle('show')
}