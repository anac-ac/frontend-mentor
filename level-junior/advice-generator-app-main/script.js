const getPhrases = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    addText(data)

  } catch (err) {
    console.error('Something went wrong')
    console.error(err)
  }
};

const addText = (data) => {
  const numberElement = document.querySelector("span");
  const textElement = document.querySelector("#quote");

  numberElement.textContent = data.slip.id;
  textElement.textContent = data.slip.advice;
}

const diceBtn = document.querySelector('#dice')
diceBtn.addEventListener('click', getPhrases)
window.onload = getPhrases;