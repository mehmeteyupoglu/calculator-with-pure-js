addition.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        result.innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        result.innerHTML = num1 + num2
        num1 = 0
        num2 = 0
}    
})

subtraction.addEventListener('click', function () {
    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        result.innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        result.innerHTML = num1 - num2
        num1 = 0
        num2 = 0
}    
})

multiplication.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        result.innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        result.innerHTML = num1 * num2
        num1 = 0
        num2 = 0
}    
})

division.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        result.innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        result.innerHTML = num1 / num2
        num1 = 0
        num2 = 0
}    
})

clear.addEventListener("click", function () {
    num1 = 0
    num2 = 0
    result.innerHTML = 0
})

