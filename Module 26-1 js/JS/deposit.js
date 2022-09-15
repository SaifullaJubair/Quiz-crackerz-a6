document.getElementById('btn-deposit').addEventListener('click',function(){
      const depositFiled = document.getElementById('deposit-amount')
      const depositNewString = depositFiled.value;
      const depositNew = parseFloat(depositNewString)

      const depositTotalElement = document.getElementById('deposit-total')
      const previousDepositString = depositTotalElement.innerText
      const previousDeposit = parseFloat(previousDepositString);
      
      const currentDepositTotal = depositNew + previousDeposit;

            depositTotalElement.innerText = currentDepositTotal;
      depositFiled.value = '';

      const blanceTotalElement = document.getElementById('bl-total');
      const blancePreviousTotalString = blanceTotalElement.innerText;
      const blancePreviousTotal = parseFloat(blancePreviousTotalString);
      const currentBlanceTotal = currentDepositTotal + blancePreviousTotal;
      
      blanceTotalElement.innerText = currentBlanceTotal;
})

document.getElementById('btn-withdrow').addEventListener('click',function(){
      //withdrow inputfiled er part 
      const withdrowField = document.getElementById('withdrow-amount')
      const withdrowAmountString = withdrowField.value;
      const withdrowAmount = parseFloat(withdrowAmountString);
      withdrowField.value ='';
      if(isNaN(withdrowAmount)){
            alert('Please input number only');
            return;
      }

      const previoustWithdrowElement = document.getElementById('withdrow-total')
      const previousWithdrowString = previoustWithdrowElement.innerText;
      const previousWithdrow = parseFloat(previousWithdrowString);

      const previousBlanceElement = document.getElementById('bl-total')
      const previousBlanceString = previousBlanceElement.innerText;
      const previousBlance = parseFloat(previousBlanceString);
     
      if( withdrowAmount > previousBlance){
            alert('Not enough blance')
            return;
      }

      const currentWithdrow = previousWithdrow +withdrowAmount;
      previoustWithdrowElement.innerText =  currentWithdrow;

      const currentBlanceAfterWithdrow = previousBlance - withdrowAmount;
      previousBlanceElement.innerText = currentBlanceAfterWithdrow;

      
     

      
})
