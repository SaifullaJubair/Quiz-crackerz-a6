// // deposit 
document.getElementById('btn-deposit').addEventListener('click',function(){
      const newDepositAmount = getInputFieldValueById('deposit-amount');
      const previousDepositAmount = getElementValueById('deposit-total');
      const newDepositTotal = newDepositAmount + previousDepositAmount;
      setElementValueById('deposit-total',newDepositTotal)

      // get previous blance
const previousBlance = getElementValueById('bl-total');
      const currentBlance = previousBlance + newDepositAmount;
      setElementValueById('bl-total',currentBlance);
})


      // const depositPreviousAmountElement = document.getElementById('deposit-amount')
//       const depositPreviousAmountString = depositPreviousAmountElement.value;
//       const depositPreviousAmount = parseFloat(depositPreviousAmountString);
//       depositPreviousAmountElement.value = '';
      
      
//       const previousDepositTotal = document.getElementById('deposit-total');
//       const previousDepositTotalString = previousDepositTotal.innerText;
//       const previousDeposit = parseFloat(previousDepositTotalString);

//       const currentDeposit = depositPreviousAmount + previousDeposit;
//       previousDepositTotal.innerText = currentDeposit; 

//       // current blance 
//       const previousBlanceAmount = document.getElementById('bl-total');
//       const previousBlanceString = previousBlanceAmount.innerText;
//       const previousBlance = parseFloat(previousBlanceString);

//       const currentBlance = previousBlance + depositPreviousAmount;
//       previousBlanceAmount.innerText = currentBlance; 
// })

