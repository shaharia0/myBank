//step 1 : add eventlistener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//  step 2 : get the deposit amount from the deposit input field 
 const depositInfo = document.getElementById('deposit-info');
 const newDepositAmountString = depositInfo.value;
 const newDepositAmount = parseFloat(newDepositAmountString);

 depositInfo.value = '';
 
 if(isNaN(newDepositAmount)){
   alert ('Please Provide a Valid Number');
   return;
 }
 // step 3: get the current deposit total 
 const depositTotalElement = document.getElementById('deposit-total');
 const previousDepositTotalString = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalString);

 //step 4 add numbers to set the total deposit 
 const currentDepositTotal = previousDepositTotal + newDepositAmount;
 //set the deposit total 
 depositTotalElement.innerText = currentDepositTotal;
// step-5: get balance current total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step-6: calculate current total balance 
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//set the balance total 
balanceTotalElement.innerText = currentBalanceTotal;

//  last step : clear the deposit field 
  // depositInfo.value = '';
  
});