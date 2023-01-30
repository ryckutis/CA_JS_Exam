/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const resultDiv = document.querySelector("#output");
const numberInput = document.querySelector("#search");

document.querySelector("form").addEventListener("submit", convertWeight);

function convertWeight(e) {
  e.preventDefault();
  resultDiv.innerHTML = "";
  const kgNumber = +numberInput.value;
  const lbNumber = kgNumber * 2.2046;
  const gNumber = kgNumber / 0.001;
  const ozNumber = kgNumber * 35.274;

  const resultText = `${lbNumber} lb ; ${gNumber} g ; ${ozNumber} oz ;`;

  resultDiv.append(resultText);
  numberInput.value = "";
}
