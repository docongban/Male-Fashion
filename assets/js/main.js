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