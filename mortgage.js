const form = document.querySelector(".form");
const paymentAmount = document.querySelector(".payment-amount");

const interestRate = 15 / 100 / 12; 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const principal = parseFloat(document.getElementById("principle").value);
  const loanTermYears = parseFloat(document.getElementById("loan-term").value);
  const numOfPayments = loanTermYears * 12; 

  const rateFactor = Math.pow(1 + interestRate, numOfPayments);
  const monthlyPayment = (principal * interestRate * rateFactor) / (rateFactor - 1);

  paymentAmount.textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)} SEK`;
});