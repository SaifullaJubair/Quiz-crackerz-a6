//1.Radian to Degree convert
function radianToDegree(radian){
      if(typeof radian !== 'number'){
            return 'Please Input a number';
      }
//pi variable declare pi =3.1416 = Math.PI
      const pi = Math.PI; 
      const degree = radian*180/pi; //radian to degree formula = raidan*180/3.1416      
 return degree;
 }
 const radian = 5;
 const convertDegree = radianToDegree(radian);
 console.log(convertDegree);

 //2.Check whether the given file is a javascript file or not

 function isJavaScriptFile(fileName){
//input type check
      if(typeof fileName !== 'string'){
            return 'Input type must be string ';
      }
      else{
            let jsFileChecking = fileName.indexOf('.js');
            let jsCondition = jsFileChecking !== -1;
            return jsCondition;
      }
      
}
let fileName = "is that a javaScriptfile.js";
const fileNamesOutput= isJavaScriptFile(fileName);
console.log(fileNamesOutput);

//3.Calculate the total oil price that i have to pay

function oilPrice(diselQuantity, petrolQuantity, octaneQuantity){
      let diselPrice = 114;
      let petrolPrice = 130;
      let octanePrice = 135;
      if(typeof diselQuantity !== 'number' ){
            return 'Please Input valid number disel quantity';
      }
      else if (typeof petrolQuantity !== 'number'){
            return 'Please Input a number of petrol quntity'
      }
      else if (typeof octaneQuantity !== 'number'){
            return 'Please Input a number of octane quntity'
      }
      else{
            let oilPriceCalculiting = diselPrice*diselQuantity + petrolPrice * petrolQuantity + octanePrice* octaneQuantity;
            return oilPriceCalculiting;

      }
}
let diselQuantity= 1;
let petrolQuantity = 1;
let octaneQuantity = 1;
const totalPrice = oilPrice(diselQuantity, petrolQuantity, octaneQuantity);
console.log(totalPrice);


//.4 public bus fare
function publicBusFare(people){
      if(typeof totalPeople !== 'number'){
           return 'Please Input a number';
     }
     else{
            const busCapacity = 50;
            const microBusCapacity = 11;
            const reminderBus = people % busCapacity;
            const reminderMicrobus = reminderBus % microBusCapacity;
            const localBusFare= reminderMicrobus * 250;
            return localBusFare;
     }
}
const totalPeople = 119;
const price = publicBusFare(totalPeople);
console.log( price)

//---------05----------

function isBestFriend(obj1 , obj2){
      if(typeof obj1.name !== 'string' ){
            return 'Input type must be string ';
      }
      else if(typeof obj2.friend !== 'string' ){
            return 'Input type must be string ';
      }
      else if(typeof obj2.name !== 'string' ){
            return 'Input type must be string ';
      }
      else if(typeof obj1.friend !== 'string' ){
            return 'Input type must be string ';
      }
      
      else{
            if(obj1.name === obj2.friend && obj2.name === obj1.friend){
                  return true;
            }
            else{
                  return false;
            }
      }
      
}

const obj1 = {name: 'Tom' , friend: 'Rana' }
const obj2 = {name: 'Rana' , friend: 'Tom' }

const friendCheck =isBestFriend(obj1,obj2);
console.log(friendCheck)