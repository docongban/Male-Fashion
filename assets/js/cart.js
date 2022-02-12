// Start replace quantity

var decrements = document.querySelectorAll('.cart__table__body__item__quanity--left')
var increments = document.querySelectorAll('.cart__table__body__item__quanity--right')
var numbers = document.querySelectorAll('.cart__table__body__item__quanity--input')



numbers.forEach(function(number,index){
    var num = 1
    var decrement = decrements[index]
    var increment = increments[index]

    decrement.onclick = function() {
        num--

        if(num >= 1){
            number.value = num
        }
    }

    increment.onclick = function() {
        num++

        number.value = num
    }
})
// End replace quantity