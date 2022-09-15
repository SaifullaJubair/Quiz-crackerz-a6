var shoppingCart={
      book:3,
      khata:4,
      pen:10,
      pencil:1,
      jelpen:2
}
// when you know the properties name,use dot notation to get the property value
var penCount =shoppingCart.pen;
//alternative system
// when you know the properties name,use dot notation to get the property value
var penCount = shoppingCart['pen'];
// all properties janar jonno Object.keys(variablename); likhte hobe 
var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
console.log(properties)
console.log(propertiesValues);
// console.log(shoppingCart);
