const clearAll = () => {
  document.getElementById("amount").value = "";
  document.getElementById("term").value = "";
  document.getElementById("interest").value = "";
};

const colorForRadio = () => {
  const repaymentRadio = document.getElementById("js-repayment").checked;
  const interestRadio = document.getElementById("js-interest-only").checked;
  const repayment = document.getElementById("js-mortage-span-repayment");
  const interest = document.getElementById("js-mortage-span-interest");

  if (repaymentRadio) {
    repayment.style.backgroundColor = "hsl(61, 70%, 52%, 0.5)";
    interest.style.backgroundColor = "hsl(0, 0%, 100%)";
  } else if (interestRadio) {
    interest.style.backgroundColor = "hsl(61, 70%, 52%, 0.5)";
    repayment.style.backgroundColor = "hsl(0, 0%, 100%)";
  }
};

const calculateMortage = () => {
  const result = document.getElementById("js-result");

  const amount = Number(document.getElementById("amount").value);
  const term = Number(document.getElementById("term").value);
  const interest = Number(document.getElementById("interest").value);
  const repayment = document.getElementById("js-repayment").checked;
  const interestOnly = document.getElementById("js-interest-only").checked;

  if (amount && term && interest) {
    let monthlyinterest = interest / 100 / 12;
    let totalPayments = term * 12;
    let shortening = amount / totalPayments;
    let calculated = Math.round(
      (amount * ((1 + monthlyinterest) ** totalPayments * monthlyinterest)) /
        ((1 + monthlyinterest) ** totalPayments - 1)
    ).toFixed(2);
    let calculateInterest = Math.round(
      calculated - amount / totalPayments
    ).toFixed(2);
    let totalSum = Math.round(calculated * 12 * totalPayments).toFixed(2);
    if (repayment) {
      return (result.innerHTML = `<div class="results">
        <h2>Your results</h2>
        <p>
         Your results are shown below based on the information you
          provided. To adjust the results, edit the form and click “calculate
          repayments” again
        </p>
        <div class="final-result">
        <h3>Your monthly repayments </h3>
        <p>€ ${calculated}</p>
        <h3>Total you'll repay over the term</h3>
        <p>€ ${totalSum} </p>
        </div>
      </div>`);
    } else if (interestOnly) {
      return (result.innerHTML = `<div class="results">
            <h2>Your results</h2>
            <p>
             Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click “calculate
              repayments” again
            </p>
            <div class="final-result">
            <h3>Your monthly interest </h3>
            <p>€ ${calculateInterest}</p>
            </div>
          </div>`);
    } else {
      return (result.innerHTML = "Please check Mortage Type");
    }
  } else {
    return (result.innerHTML = "Please check the input fields again");
  }
};
