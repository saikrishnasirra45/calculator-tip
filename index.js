let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorMessageElement = document.getElementById("errorMessage");

function calculatedTip() {
    let inputNumber = billAmountElement.value;
    let percentage = percentageTipElement.value;
    if (inputNumber === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentage === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(inputNumber);
        let percentageTip = parseInt(percentage);
        let calculatedTip = (percentage / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
    }
}