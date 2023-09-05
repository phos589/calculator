function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch (error) {
      document.getElementById("display").value = "Error";
  }
}

function calculatePercentage() {
  const currentValue = document.getElementById("display").value;
  const result = parseFloat(currentValue) / 100;
  document.getElementById("display").value = result;
}

function removeLastDigit() {
  let currentValue = document.getElementById("display").value;
  if (currentValue.length > 0) {
      currentValue = currentValue.slice(0, -1);
      document.getElementById("display").value = currentValue;
  }
}

function toggleSign() {
  let currentValue = document.getElementById("display").value;
  if (currentValue !== "0" && currentValue !== "") {
      if (currentValue[0] === "-") {
          currentValue = currentValue.slice(1);
      } else {
          currentValue = "-" + currentValue;
      }
      document.getElementById("display").value = currentValue;
  }
}
