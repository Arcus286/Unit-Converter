const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("value");
const lengthVal = document.getElementById("conversion-length");
const volumeVal = document.getElementById("conversion-volume");
const massVal = document.getElementById("conversion-mass");

convertBtn.addEventListener("click", function () {
  renderConversion();
});

function renderConversion() {
  const conversionValue = inputValue.value;
  renderLength(conversionValue);
  renderVolume(conversionValue);
  renderMass(conversionValue);
}

function renderLength(conversionValue) {
  lengthVal.textContent = `${conversionValue} meters = ${(conversionValue * 3.281).toFixed(3)} feet 
  | ${conversionValue} feet = ${(conversionValue / 3.281).toFixed(3)} meters`;
}

function renderVolume(conversionValue) {
  volumeVal.textContent = `${conversionValue} liters = ${(conversionValue * 0.264).toFixed(3)} gallons 
  | ${conversionValue} gallons = ${(conversionValue / 0.265).toFixed(3)} liters`;
}

function renderMass(conversionValue) {
  massVal.textContent = `${conversionValue} kilogram = ${(conversionValue * 2.204).toFixed(3)} pound 
  | ${conversionValue} pound = ${(conversionValue / 2.204).toFixed(3)} kilogram`;
}
