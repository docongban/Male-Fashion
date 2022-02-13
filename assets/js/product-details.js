// Start tab image
var imageTabs = document.querySelectorAll('.image__direct--item')
var imageDisplays = document.querySelectorAll('.image__full--item')

imageTabs.forEach(function(imageTab,index){
    var imageDisplay = imageDisplays[index]

    imageTab.onclick = function(){
        document.querySelector('.image__full--item.active').classList.remove('active')

        imageDisplay.classList.add('active')
    }

})
// End tab image


// Start chosse size 
var sizes = document.querySelectorAll('.product__detail__text--size-item')

sizes.forEach(function (size,index) {

    size.onclick = function(){
        document.querySelector('.product__detail__text--size-item.active').classList.remove('active')

        size.classList.add('active')
    }
})
// End chosse size 


// Start tab description
var tabs = document.querySelectorAll('.product__detail__tab--item')
var descriptons = document.querySelectorAll('.product__detail__information--description')

tabs.forEach(function (tab,index) {
    var description = descriptons[index]
    tab.onclick = function(){
        document.querySelector('.product__detail__tab--item.active').classList.remove('active')
        document.querySelector('.product__detail__information--description.active').classList.remove('active')

        tab.classList.add('active')
        description.classList.add('active')
    }
})
// End tab description

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