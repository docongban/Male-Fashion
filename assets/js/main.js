// Start slider
var slides = document.querySelectorAll('.slider__background')
var preButton = document.querySelector('.slider__btn--left')
var nextButton = document.querySelector('.slider__btn--right')
var totalSlides = slides.length
var index = 0

nextButton.onclick = function(){
    sliderBehavior("next")
}

preButton.onclick = function(){
    sliderBehavior("pre")
}

function sliderBehavior(e){
    if(e=="next"){
        index++
        if(index==totalSlides){
            index=0
        }
    }else{
        if(index==0){
            index=totalSlides-1
        }else{
            index--
        }
    }

    // remove all
    for(var i=0 ; i<totalSlides ; i++){
        slides[i].classList.remove('active')
    }

    // add btn mới
    slides[index].classList.add('active')
}
// End slider


// Start choose color
var colors = document.querySelectorAll('.sample__product--color-item')
var products = document.querySelectorAll('.sample__product')

colors.forEach(function(color){
    color.onclick = function(){
        document.querySelectorAll('.sample__product--color-item.active').forEach(function(e){
            e.classList.remove('active')
        })
        color.classList.add('active')
    }
})
// End choose color


// Start tab pane highlight
var tabs = document.querySelectorAll('.sample__link--item')
var panes = document.querySelectorAll('.sample__item')

const tabActive = document.querySelector('.sample__link--item.active')

tabs.forEach(function(tab,index){
    const pane = panes[index]
    
    tab.onclick= function(){
        document.querySelector('.sample__link--item.active').classList.remove('active')
        document.querySelector('.sample__item.active').classList.remove('active')

        tab.classList.add('active')
        pane.classList.add('active')
    }
})
// End tab pane highlight


// Start countdown time

var day = document.querySelector("#days")
var hour = document.querySelector("#hours")
var minute = document.querySelector("#minutes")
var second = document.querySelector("#seconds")

var countDownDate = new Date("Mar 5, 2022 15:37:25").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    day.innerHTML = `${days<10 ? '0'+days : days}<span>:</span>`
    hour.innerHTML = `${hours<10 ? '0'+hours : hours}<span>:</span>`
    minute.innerHTML = `${minutes<10 ? '0'+minutes : minutes}<span>:</span>`
    second.innerHTML = `${seconds<10 ? '0'+seconds : seconds}<span></span>`

    if (distance < 0) {
        clearInterval(x);
        day.innerText = "00"
        hour.innerText = "00"
        minute.innerText = "00"
        second.innerText = "00"
    }
  }, 1000);
// End countdown time


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