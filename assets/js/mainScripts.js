const clearAll = () => {
  document.getElementById("amount").value = "";
  document.getElementById("term").value = "";
  document.getElementById("interest").value = "";
};

const signup = (event) => {
  event.preventDefault();
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
  const imageShown = document.getElementById("js-result-image");

  if (amount && term && interest) {
    let monthlyinterest = interest / 100 / 12;
    let totalPayments = term * 12;
    let shortening = amount / totalPayments;
    let calculated =
      (amount * ((1 + monthlyinterest) ** totalPayments * monthlyinterest)) /
      ((1 + monthlyinterest) ** totalPayments - 1);
    let calculateInterest = calculated - amount / totalPayments;
    let totalSum = calculated * 12 * term;

    if (repayment) {
      imageShown.style.display = "none";
      return (result.innerHTML = `<div class="results">
        <h2>Your results</h2>
        <p class="result-first-p">
         Your results are shown below based on the information you
          provided. To adjust the results, edit the form and click “calculate
          repayments” again
        </p>
        <div class="final-result">
        <h3>Your monthly repayments </h3>
        <p>€ ${calculated.toFixed(2)}</p>
        <h3>Total you'll repay over the term</h3>
        <p>€ ${totalSum.toFixed(2)} </p>
        </div>
      </div>`);
    } else if (interestOnly) {
      imageShown.style.display = "none";
      return (result.innerHTML = `<div class="results">
            <h2>Your results</h2>
            <p>
             Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click “calculate
              repayments” again
            </p>
            <div class="final-result">
            <h3>Your monthly interest </h3>
            <p>€ ${calculateInterest.toFixed()}</p>
            </div>
          </div>`);
    } else {
      return (result.innerHTML = `<div class="results"><p>Please check Mortage Type</p></div>`);
    }
  } else {
    return (result.innerHTML = `<div class="results"><p>Please check the input fields again</p></div>`);
  }
};
