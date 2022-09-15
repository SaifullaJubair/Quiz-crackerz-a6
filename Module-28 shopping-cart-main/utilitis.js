function getInputValueById(inputFieldId){
      const inputField = document.getElementById(inputFieldId);
      const inputFieldString = inputField.value;
      const inputValue = parseInt(inputFieldString);
      return inputValue;
}
function setInputFieldValueById(inputId,newValue){
      const inputElement = document.getElementById(inputId);
      inputElement.value = newValue;
}
function setElementInnerText(elementId,newValue){
      const textElement = document.getElementById(elementId);
      textElement.innerText = newValue;
} 
function getTextElementById(elementId){
      const caseElement = document.getElementById('case-price');
      const caseElementString = caseElement.innerText;
      const casePrice = parseInt(caseElementString);
      return casePrice;
}






// function getInputFieldValueById(inputFiledId){
//       const inputField = document.getElementById(inputFiledId);
//       const inputFieldValueString = inputField.value
//       const inputFieldValue = parseFloat(inputFieldValueString);
//       inputField.value = '';
//       return inputFieldValue;
// }
// function getElementValueById(elementId){
//       const element = document.getElementById(elementId);
//       const elementValueString = element.innerText;
//       const elementValue = parseFloat(elementValueString);
//       return elementValue;

// }
// function setElementValueById(elementId,newValue){
//       const textElement = document.getElementById(elementId);
//       textElement.innerText = newValue;
// }