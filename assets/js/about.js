// counter

var counters = document.querySelectorAll('.counter__item--number')

document.querySelector('.counter').onclick = function(){
    counters.forEach(function(counter, index) {
        counter.innerText = '0'

        const counterRun = function(){
            const target = +counter.getAttribute('data-number')
            const count = +counter.innerText

            const incre = target / 200
            if(count < target){
                counter.innerHTML = `${Math.ceil(count + incre)}`
                setTimeout(counterRun, 10)
            }else{
                counterRun.innerText = target
            }
        }
        
        counterRun()
    })
}