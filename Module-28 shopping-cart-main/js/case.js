// function updateCaseNumber(isIncrease){
//       const caseNumberFieldElement = document.getElementById('case-number-field');
//       const caseNumberFieldString = caseNumberFieldElement.value;
//       const caseNumberField =  parseFloat(caseNumberFieldString);
//       let caseNumber;
//       if( isIncrease === true){
//             caseNumber = caseNumberField + 1;
//       }
//       else{
//             caseNumber = caseNumberField -1;
//       }
//       caseNumberFieldElement.value = caseNumber
// }
document.getElementById('btn-case-plus').addEventListener('click',function(){
      const caseNumberIncrease = getInputValueById('case-number-field');
      const caseNumberPlus = caseNumberIncrease + 1;
      setInputFieldValueById('case-number-field',caseNumberPlus);
      const casePriceTotal = caseNumberPlus * 60;
      setElementInnerText('case-price',casePriceTotal);

      // updateCaseNumber(true);
      // const caseNumberFieldElement = document.getElementById('case-number-field');
      // const caseNumberFieldString = caseNumberFieldElement.value;
      // const caseNumberField =  parseFloat(caseNumberFieldString);
      // const caseNumber = caseNumberField + 1;
      // caseNumberFieldElement.value = caseNumber; 
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
      const caseNumberDecrese = getInputValueById('case-number-field');
      const caseNumberMinus = caseNumberDecrese -1;
      setInputFieldValueById('case-number-field',caseNumberMinus);
      const casePriceTotal = caseNumberMinus * 60;
      setElementInnerText('case-price',casePriceTotal);
      
      // const caseNumberFieldElement = document.getElementById('case-number-field');
      // const caseNumberFieldString = caseNumberFieldElement.value;
      // const caseNumberField =  parseFloat(caseNumberFieldString);
      // const caseNumber = caseNumberField -1;
      // caseNumberFieldElement.value = caseNumber; 
})
document.getElementById('btn-iphone-plus').addEventListener('click',function(){
      const phoneNumberPlus = getInputValueById('phone-number-field')
      const phoneNumberIncrease = phoneNumberPlus +1
      setInputFieldValueById('phone-number-field',phoneNumberIncrease);
      const phonePrice = phoneNumberIncrease * 1200;
      setElementInnerText('phone-price',phonePrice);
})
document.getElementById('btn-iphone-minus').addEventListener('click',function(){
      const phoneNumberDecrease = getInputValueById('phone-number-field');
      const phoneNumberMinus = phoneNumberDecrease -1;
      setInputFieldValueById('phone-number-field',phoneNumberMinus);
      const phonePriceTotal = phoneNumberMinus * 1200;  
      setElementInnerText('phone-price',phonePriceTotal);
})