const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function calculateBMI() {
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height * height);
  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}

calculateBtn.addEventListener("click", calculateBMI);
