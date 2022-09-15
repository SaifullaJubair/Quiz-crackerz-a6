function add( number1, number2){
      console.log( number1, number2);
      var sum = number1 + number2;
      return sum;
}
var total = add(80,20);
console.log('total' , total)

function bringShingara(money){
      var shingaraPrice = 10;
      var quantity = money / shingaraPrice;
      return quantity;
}
var myMoney = 200;
var shingaras = bringShingara(myMoney);
console.log("eating shigara" , shingaras);