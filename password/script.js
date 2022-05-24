const pw = document.getElementById('pw');
const copyBtn = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '01234456789';
const symbols = '!@#$%^&*()_+=<>?,./{}[]\|~`-';

function getLower() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpper() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  if (!(upper.checked || lower.checked || number.checked || symbol.checked)) {
    alert("Check at least one box");
  // } else if () {

  } else {
    let password = '';

    // if (upper.checked) {
    //   password += getUpper();
    // }
    // if (lower.checked) {
    //   password += getLower();
    // }
    // if (number.checked) {
    //   password += getNumber();
    // }
    // if (symbol.checked) {
    //   password += getSymbol();
    // }

    for (let i = password.length; i < len; i++) {
      const x = generateX();
      password += x;
    }

    pw.innerText = password;
  }
}

function generateX() {
  const xs = [];

  if (upper.checked) {
    xs.push(getUpper());
  }
  if (lower.checked) {
    xs.push(getLower());
  }
  if (number.checked) {
    xs.push(getNumber());
  }
  if (symbol.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) {
    return "";
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement('textarea');
  const password = pw.innerText;

  if (!password) {
    return ;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  // alert('Password copied to clipboard');
});
