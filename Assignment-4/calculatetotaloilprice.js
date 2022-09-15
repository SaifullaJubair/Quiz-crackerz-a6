//Calculate the total oil price that i have to pay
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