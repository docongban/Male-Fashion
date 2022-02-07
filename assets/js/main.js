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