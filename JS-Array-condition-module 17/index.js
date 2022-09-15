var number = [ 45, 75, 48, 65, 26, 66, 98];
// get element by index 
console.log(number[3])
var elementSecond = number[1];
console.log(elementSecond);
// set elemnt velu by index 
number[2] =77;
// আরে মধ্যে কোন উপাদানের মান পরিবর্তন করতে চাইলে আরে ভারিএবেল লিখে number []এর মধ্যে ইনডেক্স নাম্বার লিখে ভালু সেট করলেই আরে ইলিমেন্ট পরিবর্তন হয়ে যাবে

console.log(number);

// find index of an element 
var positionIndex = number.indexOf(98);
console.log(positionIndex);
// আরে মধ্যে কোন উপাদান খুজতে চাইলে .indexOf use korte hobe যদি না পায় তাহলে -1 output ashbe 