// Start slidebar

var slideBars = document.querySelectorAll('.slidebar__funtion__item')
var titleSlideBars = document.querySelectorAll('.slidebar__funtion__item--header')

slideBars.forEach(function(slideBar,index) {
    var titleSlideBar = titleSlideBars[index]
    titleSlideBar.onclick = function(){
        slideBar.classList.toggle('active')
    }
})

// click chosse size
var sizes = document.querySelectorAll('.slidebar__funtion__item:nth-child(4) .slidebar__funtion__item--list__item')

sizes.forEach(function(size){
    size.onclick = function(){
        
        document.querySelector('.slidebar__funtion__item:nth-child(4) .slidebar__funtion__item--list__item.active').classList.remove('active')

        size.classList.add('active')
    }
})

// End slidebar


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