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