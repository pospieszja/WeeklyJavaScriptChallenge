let inputValue;
let primaryNumbers;

const validateNumber = function(value) {
  if (!Number.isNaN(value) && (value >= 0 && value < 10000)) {
    return true;
  }
};

const isPrimary = function(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const generatePrimaryFromRange = function() {
  inputValue = document.getElementById("range").value;
  primaryNumbers = [];
  if (validateNumber(inputValue)) {
    for (let i = 2; i < inputValue; i++) {
      if (isPrimary(i)) {
        primaryNumbers.push(i);
      }
    }
    result.textContent = primaryNumbers.join(", ");
  } else {
    alert("not a valid number");
  }
};

const button = document.getElementById("generate-primary");
const result = document.getElementById("result");
button.addEventListener("click", generatePrimaryFromRange);
