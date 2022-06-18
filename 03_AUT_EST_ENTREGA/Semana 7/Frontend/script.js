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

$(document).ready(() => {
  $.get("http://127.0.0.1:3030/getName", (result) => {
    $("#h2name").text(result.Name);
  });
});
