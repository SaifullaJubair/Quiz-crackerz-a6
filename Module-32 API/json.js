// Module no: 31.2
const shop = {
      name: 'Advut Dhava',
      place: 'shonadanga',
      item: {
            Breckfast: 'Porota , dal , khichuri',
            Lunch: 'mutton , biriani', 
            Dinner:'Ruti, vaji'
      },
      combo: ['a','c','d'],
}
console.log(shop);
const json = JSON.stringify(shop)
console.log(json)
const jsonParse = JSON.parse(json)
console.log(jsonParse)

// kono object k string  korte JSON.stringify use korte hoy 
// r tar opposite korte JSON.parse korte hobe 