const calculateMortage = () => {
  const result = document.getElementById("js-result");
  const calculatedResult = document.getElementById("js-result-amount");
  let calculated = 0;

  const amount = Number(document.getElementById("amount").value);
  console.log(amount);
  const term = Number(document.getElementById("term").value);
  console.log(term);
  const interest = Number(document.getElementById("interest").value);
  console.log(interest);

  let calc = 300000 * 0.0525 * 25;
  let calc2 = calc / 25 / 12;
  let calc3 = (calc - 300000) / 25 / 12;

  let calc4 = 10000 * 0.05 * 5;
  console.log("total" + calc);
  console.log("repayment" + calc2);
  console.log("interest" + calc3);
  console.log(calc4);

  if (amount && term && interest) {
    calculated = Math.round(
      (amount * term * (interest / 100)) / term / 12
    ).toFixed(2);
    totalSum = Math.round(amount * term * (interest / 100)).toFixed(2);
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
  } else {
    return (result.innerHTML = "Please check the input fields again");
  }

  result.innerHTML = `Your results Your results are shown below based on the information you
        provided. To adjust the results, edit the form and click “calculate
        repayments” again. <br>
        <div>
        <h2 class=""> </p>
        Your monthly repayments Total you'll repay over the
        term`;

  calculatedResult.innerHTML = calculated;
};
