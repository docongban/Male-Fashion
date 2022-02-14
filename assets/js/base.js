
// Start menu mobile
var menuBtn = document.querySelector('.header__mobile--menu')
var overlay = document.querySelector('.overlay')
var menuMobile = document.querySelector('.mobile__menu_background')

menuBtn.onclick = function() {
    overlay.classList.add('active')
    menuMobile.classList.add('active')
}

overlay.onclick = function() {
    setTimeout(function() {
        overlay.classList.remove('active')
    },500)
    menuMobile.classList.remove('active')
}
// End menu mobile


// Start list menu
document.querySelector('.mobile__menu__option--money').onclick = function() {
    document.querySelector('.mobile__menu__option--money-list').classList.toggle('active')
}

var listMenuBtn = document.querySelector('.mobile__menu__navbar--btn')
var list = document.querySelector('.mobile__menu__navbar--list')

listMenuBtn.onclick = function(){
    list.classList.toggle('active')
}
// End list menu


// Start hover product
var productItemMobiles = document.querySelectorAll('.sample__product')
var productHoverMobiles = document.querySelectorAll('.sample__product--hover')
var productAddCartMobiles = document.querySelectorAll('.sample__product--add-cart')
var productColorMobiles = document.querySelectorAll('.sample__product--color')

productItemMobiles.forEach(function(productItemMobile,index){
    var productHoverMobile = productHoverMobiles[index]
    var productAddCartMobile = productAddCartMobiles[index]
    var productColorMobile = productColorMobiles[index]

    productItemMobile.onclick = function(){
        productHoverMobile.classList.toggle('active')
        productAddCartMobile.classList.toggle('active')
        productColorMobile.classList.toggle('active')
    }
})
// End hover product