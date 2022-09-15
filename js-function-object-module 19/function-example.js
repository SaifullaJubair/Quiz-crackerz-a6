// function functionName( parameters){
//       function body;
//       return;
// }
// var returnedValue = functionName(parameters value);
function getAverage (assignment1 , assignment2 , assignment3){
      const total = assignment1 + assignment2 + assignment3;
      const average = total / 3;
      return average;
}
var assignment1Marks = 60;
var assignment2Marks = 48;
var assignment3Marks = 50;

var myAverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);
console.log('My Average so far:' , myAverage);
