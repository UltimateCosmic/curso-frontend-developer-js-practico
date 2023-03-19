const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    /*const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');
    if (!isCarritoMenuClosed)*/
        carritoMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    /*const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');
    if (!isCarritoMenuClosed)*/
        carritoMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    /*const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed)*/
        desktopMenu.classList.add('inactive');
    /*const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed)*/
        mobileMenu.classList.add('inactive');
    carritoMenu.classList.toggle('inactive');
}