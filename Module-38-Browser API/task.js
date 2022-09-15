console.log('First')
console.log('Second')
setTimeout(function(){
      console.log('third')
},1750)
console.log('Fourth')
console.log('Fift')



// const addNumber = () => {
//       const promptNumber = prompt('Input your number');
//       const number = parseInt(promptNumber)
//       const sumnumber = number + 250
//       alert(sumnumber)
//       console.log(sumnumber)
// }

// A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time. Cookies are used to tell the server that users have returned to a particular website.
const obj = {a:1};
console.log(Object.keys(obj).length===0);
