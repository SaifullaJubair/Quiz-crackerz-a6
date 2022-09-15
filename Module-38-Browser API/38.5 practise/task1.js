const resetStorage = () => {
      localStorage.clear()
      console.log('stroage clear')
}
const addAge = () => {
      localStorage.setItem('Name','Shakib Khan')
      localStorage.setItem("age", 40)
      console.log('btnclik')
}
const getAge = () => {
      const ageShow = localStorage.getItem("age")
      alert(ageShow)
}
const objAdd = () => {
      const student = { id: 15 , roll : 27 , class: 17 }
      const objAddStringfied = JSON.stringify(student)
      localStorage.setItem('Student' , objAddStringfied)
      console.log(objAddStringfied)
}
const removeName = () => {
      localStorage.removeItem('Name')
}
const removeAge = () => {
      localStorage.removeItem('age')
}
