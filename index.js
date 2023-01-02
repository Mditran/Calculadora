var display = document.getElementById("display");

function addNumber(data) {
  display.value += data;
}

function resetDisplay() {
  display.value = '';
}

function addSymbol(simbolo) {
  let lastLetter = display.value.charAt(display.value.length - 1)
  if (
    lastLetter == "+" ||
    lastLetter == "-" ||
    lastLetter == "/" ||
    lastLetter == "*"
  ) {
    display.value = `${display.value.substring(0, display.value.length - 1)}`;
  }
  display.value += simbolo;
}

function total() {
  display.value = eval(display.value);
}
