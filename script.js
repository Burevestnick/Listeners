const btn = document.querySelector("#btn")
const square = document.getElementById("square")
const circle = document.querySelector('#circle')
const range = document.querySelector('#range')

btn.addEventListener('click', function() {  // 1
  color = document.getElementById("text").value
  if (color.trim() === "") {
    alert('Введите цвет!')
    document.getElementById("text").value = ""
  } else {
    square.style.backgroundColor = color
  }
}) 

document.getElementById('e_btn').style.display = "none" // 2

range.addEventListener('input', function(event) { // 3
  inputValue = event.target.value
  document.querySelector('#range-span').textContent = inputValue
  circle.style.width = inputValue + "%"
  circle.style.height = inputValue + "%" 
})








 






