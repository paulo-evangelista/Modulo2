"use strict";

function operacao() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let h1 = document.getElementById("output");
  switch (document.getElementById("oper").value) {
    case "adição":
      h1.textContent = num1 + num2;
      break;
    case "subtração":
      h1.textContent = num1 - num2;
      break;
    case "multiplicação":
      h1.textContent = num1 * num2;
      break;
    case "divisão":
      h1.textContent = num1 / num2;
      break;
    case "divisão sem resto":
      h1.textContent = Math.floor(num1 / num2);
      break;
    case "resto da divisão":
      h1.textContent = num1 % num2;
      break;
    case "potenciação":
      h1.textContent = num1 ** num2;
      break;
  }
}

/* <option value="adição">adição</option>
<option value="subtração">subtração</option>
<option value="multiplicação">multiplicação</option>
<option value="divisão">divisão</option>
<option value="divisão sem resto">divisão sem resto</option>
<option value="resto da divisão">resto da divisão</option>
<option value="potenciação">potenciação</option> */
