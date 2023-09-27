const ageCalculate = () => {
  const today = new Date();
  const inputDate = new Date(document.getElementById("date-input").value);
  const birthTime = inputDate.getTime();
  const currentTime = today.getTime();
  if (birthTime > currentTime) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
  }
  const diffTime = currentTime - birthTime;
  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  // Display the calculated age
  displayResult(days, months, years);
};
const displayResult = (days, months, years) => {
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
};

// Attach ageCalculate function to the button click event
document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);