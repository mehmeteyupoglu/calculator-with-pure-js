addition.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        document.getElementById("result").innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        document.getElementById("result").innerHTML = num1 + num2
}    
})

subtraction.addEventListener('click', function () {
    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        document.getElementById("result").innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        document.getElementById("result").innerHTML = num1 - num2
}    
})

multiplication.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        document.getElementById("result").innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        document.getElementById("result").innerHTML = num1 * num2
}    
})

division.addEventListener('click', function () {

    if (!num1 && !num2) {
        num1 = parseInt(inputValue1.value)
        inputValue1.value = 0
        document.getElementById("result").innerHTML = num1
    } else {
        num2 = parseInt(inputValue1.value)
        inputValue1.value = 0 
        document.getElementById("result").innerHTML = num1 / num2
}    
})

clear.addEventListener("click", function () {
    num1 = 0
    num2 = 0
    document.getElementById("result").innerHTML = 0
})