//1*2*3*4*5*6*7
let result =1;
function factorial( number){
      for( let i =1; i<=number ; i++){
            result = result*i;
            console.log(i,result)
      }
      return result;
}
const multificationResult = factorial(9);
console.log('Multification Result:' , multificationResult)