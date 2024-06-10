const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")
let calculated = false

const inputScroll = () => {
  display.scrollLeft = display.scrollWidth;
}

const math = () => {
  const operators = ['+', '-', '*', '/']
  const operator = operators.find(op => display.value.includes(op))

  if (!operator) return {}
  
  inputScroll()

  const splitTest = display.value.split(operator)

  const equation = splitTest.reduce((first, second) => {
    const firstInt = +first
    const secondInt = +second


    if (operator === '+') {
      return firstInt + secondInt
    } else if (operator === '-') {
      return firstInt - secondInt
    } else if (operator === '*') {
      return firstInt * secondInt
    } else if (operator === '/') {
      if (secondInt === 0) {
        return "Can't divide by 0"
      } else {
        return firstInt / secondInt
      }
    }
  })

  display.value = equation
  calculated = true
}

const keyboardClick = (keyPressed) => {
  keyPressed.preventDefault();
  const { key } = keyPressed;
  inputScroll()

  if (calculated) {
    display.value = ''
    calculated = false
  }

  const keyboardLabelObj = {
    0: () => {display.value += 0},
    1: () => {display.value += 1},
    2: () => {display.value += 2},
    3: () => {display.value += 3},
    4: () => {display.value += 4},
    5: () => {display.value += 5},
    6: () => {display.value += 6},
    7: () => {display.value += 7},
    8: () => {display.value += 8},
    9: () => {display.value += 9},
    '/': () => {display.value += '/'},
    '*': () => {display.value += '*'},
    '-': () => {display.value += '-'},
    '+': () => {display.value += '+'},
    '.': () => {display.value += '.'},
    Enter: () => {math() ?? ''},
    Backspace: () => {display.value = display.value.substr(0, display.value.length - 1) ?? ''},
    Delete: () => {display.value = ''}
  }

  keyboardLabelObj[key]?.()
};

const btnClick = (event) => {
  const buttonLabel = event.currentTarget.innerText
  inputScroll()

  if (calculated) {
    display.value = ''
    calculated = false
  }

  const btnLabelObj = {
    0: () => {display.value += 0},
    1: () => {display.value += 1},
    2: () => {display.value += 2},
    3: () => {display.value += 3},
    4: () => {display.value += 4},
    5: () => {display.value += 5},
    6: () => {display.value += 6},
    7: () => {display.value += 7},
    8: () => {display.value += 8},
    9: () => {display.value += 9},
    '/': () => {display.value += '/'},
    '*': () => {display.value += '*'},
    '-': () => {display.value += '-'},
    '+': () => {display.value += '+'},
    '.': () => {display.value += '.'},
    '=': () => {math() ?? ''},
    'DEL': () => {display.value = display.value.substr(0, display.value.length - 1) ?? ''},
    'RESET': () => {display.value = ''},
  }

  btnLabelObj[buttonLabel]?.()
}

buttons.forEach((button) => {
  button.addEventListener('click', btnClick)
})