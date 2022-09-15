// withdrow
//  withdrow input amount 
document.getElementById('btn-withdrow').addEventListener('click',function(){

      const newWithdrowAmount = getInputFieldValueById('withdrow-amount');
      const previousWithdrowAmount = getElementValueById('withdrow-total')
      const withdrowAmountTotal = previousWithdrowAmount + newWithdrowAmount;
      setElementValueById('withdrow-total',withdrowAmountTotal)

      // current blance after withdrow 

      const previousBlance = getElementValueById('bl-total');
      const currentWithdrowBlance = previousBlance-newWithdrowAmount;
      setElementValueById('bl-total',currentWithdrowBlance);

//       const previousWithdrowAmount = document.getElementById('withdrow-amount');
//       const previousWithdrowString = previousWithdrowAmount.value;
//       const previousAmount = parseFloat(previousWithdrowString);
//       previousWithdrowAmount.value ='';
//       console.log(previousAmount)

// // withdrow blance 

//       const previousWithdrowTotalAmount = document.getElementById('withdrow-total');
//       const previousWithdrowTotalString = previousWithdrowTotalAmount.innerText;
//       const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);

//       const currentWithdrowAmount = previousWithdrowTotal+previousAmount;
//       previousWithdrowTotalAmount.innerText = currentWithdrowAmount;

//       // connection dithdrow blance with current balnce 

//       const previousBlanceTotalElement = document.getElementById('bl-total');
//       const previousTotalBlanceString = previousBlanceTotalElement.innerText;
//       const previousTotalBlance = parseFloat(previousTotalBlanceString);
//       const totalCurrentBlance = previousTotalBlance - previousAmount;
      
//       previousBlanceTotalElement.innerText = totalCurrentBlance;
})