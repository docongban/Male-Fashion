// Start slidebar
var slideBars = document.querySelectorAll('.slidebar__funtion__item')

slideBars.forEach(function(slideBar,index) {
    slideBar.onclick = function(){
        slideBar.classList.toggle('active')
    }
})
// End slidebar