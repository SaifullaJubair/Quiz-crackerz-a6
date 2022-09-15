function findArrayOddNumber(number){
      const oddNumber =[];
      for( let i =0; i < number.length; i++){
            const index = i;
            const element = number[index];
            if( element % 2 !== 0){
                  console.log(index , element);
                  oddNumber.push(element);
            }
            
      }
      return oddNumber;
}
const myNumber = [12, 45, 65, 44, 97, 26, 33];
const oddNumber = findArrayOddNumber(myNumber);
console.log(oddNumber);

