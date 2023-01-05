const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let firstPassword = document.querySelector('#first-password');
let secondPassword = document.querySelector('#second-password');

function generateSymbol() {
  let randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
}

function generatePasswords() {
  firstPassword.textContent = '';
  secondPassword.textContent = '';

  let userQuantity = document.querySelector('#userQuantity').value;
  console.log(userQuantity);

  for (let i = 0; i < userQuantity; i++) {
    firstPassword.textContent += generateSymbol();
  }

  for (let i = 0; i < userQuantity; i++) {
    secondPassword.textContent += generateSymbol();
  }
}

function copyPasswordFirst() {
  navigator.clipboard.writeText(firstPassword.innerHTML);
}

function copyPasswordSecond() {
  navigator.clipboard.writeText(secondPassword.innerHTML);
}
