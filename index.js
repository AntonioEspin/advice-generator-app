const API = 'https://api.adviceslip.com/advice';
const sentence = document.querySelector('.advice-info p'); 
const adviceNumber = document.querySelector('.advice-number p');
const button = document.querySelector('.button');
button.addEventListener('click', getAdvice)

const adviceNumberList = []
for(let i = 1; i <= 100; i++) {
  adviceNumberList.push(i)
}

async function getFetch (index) {
  const response = await fetch(`${API}/${index}`)
  const data = await response.json()
  return data.slip.advice
}

async function getAdvice () {
  const indexRandomAdvice = Math.floor(Math.random() * adviceNumberList.length) + 1;
  const advice = await getFetch(indexRandomAdvice)
  sentence.textContent = `${advice}`
  adviceNumber.textContent = `Advice #${indexRandomAdvice}`
}
