const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")

const equation = (event) => {
  const buttonLabel = event.currentTarget.innerText
  
  if (buttonLabel === 'DEL') {
    display.value = display.value.substr(0, display.value.length - 1)
  }  else if ( buttonLabel === 'RESET') {
    display.value = ""
  } else if (buttonLabel === '=') {
    display.value = eval(display.value.toString())
  } else {
    display.value += buttonLabel
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', equation)
})
