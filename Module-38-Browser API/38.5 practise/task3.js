const getDocumentById = (id) => {
      const inputField = document.getElementById(id)
      const inputValue = inputField.value;
      inputField.value=''
      return inputValue;
}
const setValue = (property, value) => {
      localStorage.setItem(property,value)
}
const removeItem = property => {
      localStorage.removeItem(property)
}
const addName = () => {
      const name = getDocumentById('text-name')
      setValue('Name', name)
      console.log('btn click')
}
const addEmail = () => {
      const email = getDocumentById('text-email')
      setValue('Email', email)
      console.log('btn click')
}
const addMessage= () => {
      const message = getDocumentById('text-area')
      setValue('Message',message)
      console.log('btn click')
}
const deleteName = () => {
      removeItem('Name')
}
const deleteEmail = () => {
      removeItem('Email')
}
const deleteMessage = () => {
      removeItem('Message')
}


const btnReset = () => {
      localStorage.clear()
}




const clickBtn = () => {
      console.log('btn click')
      
}
document.getElementById('click').addEventListener('click', clickBtn)


// const email = getDocumentById('text-email')
// const message = getDocumentById('text-area')
// localStorage.setItem('name', name)
// localStorage.setItem('Email' , email)
// localStorage.setItem('Message' , message)
// console.log('btn click')