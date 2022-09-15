//1+2+3+4+5+6+7 number sum
function numberSum( number){
      let sum = 0;
      for( let i =1; i<=number; i++){
            sum = i+sum;
            console.log(i,sum);
      }
      return sum;
}
const resultOfSum = numberSum(9);
console.log('Sum:' ,resultOfSum)
// let sum=0;
// for( let i =1; i<=7; i++){
//       sum = sum+i;
//       console.log(i,sum);
// }