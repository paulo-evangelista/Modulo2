function calcular() {
  let selec = document.getElementById("selec").value;
  let arr = document.getElementById("input").value;
  let arr2 = arr.split(",");
  let arr3 = arr2.sort(function (a, b) {
    return a - b;
  });
  for (i in arr3) {
    if (arr3[i] == selec) {
      document.getElementById(
        "output"
      ).textContent = `O array ordenado é ${arr2}`;
      document.getElementById(
        "output"
      ).textContent += ` e o index de ${selec} é ${i + 1}`;
    }
  }
}
