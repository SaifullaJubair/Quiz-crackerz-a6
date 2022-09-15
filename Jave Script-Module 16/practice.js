// দকানি কাছে ১০০০ টাকা দিল। ৪০০ টাকার কমলা ৩০০ টাকার আপেল কিনল।দোকানি কত টাকা ফেরত দিল।
// practice 01

var money = 1000;
var priceOrange = 400;
var priceApple = 300;
var totalPrice = priceOrange + priceApple;
console.log(totalPrice);
var returnMoney = money - totalPrice;
console.log(returnMoney);

// math ,biology,chamistry,physics,bangla প্রাপ্ত মার্ক 75.25,65,80,35.45,99.50 প্রাপ্ত number er গড় বের কর। out put will be 2 decimal places
var math = 75.25;
var biology = 65;
var chamistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMarks = math + biology + chamistry + physics + bangla;
console.log(totalMarks);
var average = totalMarks / 5;
average = average.toFixed(2);
average = parseFloat(average);
console.log(average);
// var averageNumber =  average.toFixed(2);
// var averageNumber = parseFloat(averageNumber);
// console.log(averageNumber);

// 2 ta string line k combine kore 1 line a output korte hobe 
// Practice 03
var firstLine = 'I am going to be';
var secondLine = 'an awesome web developer';
var sentanse = firstLine + ' ' + secondLine;
console.log(sentanse);

//119 কে 5 দারা ভাগ করলে ভাগশেষ কত
var reminder = 119 % 5;
console.log(reminder);

// Another solution in details

var number1 = 119;
var number2 = 5;
var reminder = number1 % number2;
console.log(reminder);