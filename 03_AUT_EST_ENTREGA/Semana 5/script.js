let clicks = 0;
let lines = 0;

const addText = () => {
  clicks++;
  alert("Você clicou " + clicks + " vez(es)!");
};

const addLine = () => {
  lines++;
  $("#addLine").append(`<span>   |   ${lines}</span>`);
};
