function isEven(number){
      const remainder = number % 2;
      if( remainder === 0){
            console.log('Number is even')
      }
      else{
            console.log('Number is odd')
      }
}
isEven(303);
isEven(122);

function isOdd(Number){
      const remainder = Number % 2;
      if( remainder === 0){
            return true;
      }
      else{
            return false;
      }
}
const numberEven = isOdd(202);
console.log(numberEven);
const herNumberEven = isOdd(155);
console.log(herNumberEven);

function leapYear( year){
      const remainder = year % 4;
      if(remainder === 0){
            console.log('Its leap year' , year)
      }
      else{
            console.log('Its not leap year' , year)
      }
}
leapYear(2022);
leapYear(2024);
leapYear(2008);
leapYear(2030);
leapYear(2052);

function leapYears( Year){
      const remainder = Year % 4;
      if( remainder === 0){
            return true;
      }
      else{
            return false;
      }
}
var pastYear = leapYears(2008);
console.log(pastYear);
var presentYear = leapYears(2022);
console.log(presentYear);