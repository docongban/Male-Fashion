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