const ex1 = () => {
  const numb = document.querySelector("#input1").value;
  if (numb >= 1000 || numb < 100) {
    alert("apenas numeros com 3 digitos!");
    return;
  }
  console.log(numb[0]);
  if (numb[0] % 2 === 1) {
    document.querySelector("#output1").textContent = "impar";
  } else {
    document.querySelector("#output1").textContent = "par";
  }
};

const ex2 = () => {
  const numb = document.querySelector("#input2").value;
  let tam = numb.length;
  let soma = 0;
  for (let i = 0; i < tam; i++) {
    soma += Number(numb[i]);
  }
  document.querySelector("#output2").textContent = soma;
};

const ex3 = () => {
  const txt = document.querySelector("#input3").value;
  let arr = txt.split(" ");
  arr = arr.sort();
  document.querySelector("#output3").textContent = arr;
};

const ex4 = () => {
  const maxNum = Number(document.querySelector("#input4").value);
  let numAtual = 0;
  let ultimo = 1;
  let penultimo = 1;
  let finalArr = [1, 1];
  while (numAtual < maxNum) {
    numAtual = ultimo + penultimo;
    finalArr.push(numAtual);
    penultimo = ultimo;
    ultimo = numAtual;
  }
  if (finalArr.at(-1) > maxNum) finalArr.pop();
  document.querySelector("#output4").textContent = finalArr;
};

const ex5 = () => {
  const num1 = Number(document.querySelector("#input5").value);
  const num2 = Number(document.querySelector("#input6").value);
  if (num2 < num1) {
    alert("o primeiro numero deve ser maior!");
    return;
  }
  let finalArr = [];
  for (let number = num1; number <= num2; number++) {
    isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) finalArr.push(number);
  }
  document.querySelector("#output5").textContent = finalArr;
};
