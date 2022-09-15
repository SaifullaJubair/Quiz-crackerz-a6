const alart = () => {
      alert('Hi Dosto.')
}
const showAlert = () => {
      const number = Math.random()*10
      console.log(number)
      if (number < 5) {
            alart()
      }
}
const askSomething = () => {
      const dission = confirm('Are you coming to the picninc')
      console.log(dission)
      if (dission === true) {
            alert('price 500');
      }
      else {
            alert('dgm')
      }
}
const getUserInfo = () => {
      const name = prompt('Tell us your name.')
      // console.log(name)
      if (!!name) {
            console.log('walcome' , name)
      }
}