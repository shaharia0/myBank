//step 1 : add event handler in withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
// get the withdraw amaount from the withdraw amount field 
const withdrawInfo = document.getElementById('withdraw-info');
//convert user input string to number using parseFloat 
const newWithdrawAmountString = withdrawInfo.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

 //clear the input field 
 withdrawInfo.value = '';
 
if(isNaN(newWithdrawAmount)){
  alert ('Please Provide a Valid Number');
  return;
}

//get the previous withdraw amount 
 const withdrawTotalElement = document.getElementById('withdraw-total');
 const previousWithdrawTotalString = withdrawTotalElement.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
 

//get the previous balance total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


//check the amount validaty 
if(newWithdrawAmount > previousBalanceTotal){
  alert ('You donot have Enough Balance');
  return;
}
 //calculate total withdraw amount 
 const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//  // set the total amount to withdraw total field 
 withdrawTotalElement.innerText = currentWithdrawTotal;
//calculte current balance total 
const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//set the balance total 
balanceTotalElement.innerText = currentBalanceTotal;


})