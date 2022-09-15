function findSumOfAnArray(number){
      let sum= 0;
      for( let i = 0; i < number.length; i++){
            const index = i;
            const elment = number[index];
            sum = sum + elment;
            console.log(index , elment , sum);

      }
      return sum;
}
const myNumber = [12 ,65 ,45, 78, 32, 45, 91];
findSumOfAnArray(myNumber);