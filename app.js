var inputValue = document.getElementById("value");
window.onload = function() {
  value.addEventListener("input", function() {
    console.log(inputValue.value);
  });
}

addition.onclick =  function triggerAddition(inputValue) {
  alert(`Addition got clicked `)
  document.getElementById("result").innerHTML = '22'; 
  console.log("input value => ", inputValue.value)
}

subtraction.onclick = function triggerSubtraction() {
  alert("Subtraction got clicked!")
}

multiplication.onclick = function triggerMultiplication() {
  alert("Multiplication got clicked!")
}

division.onclick = function changeDivision() {
  alert("Division got clicked!")
}