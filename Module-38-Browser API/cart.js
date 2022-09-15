const getInputValueById = id => {
      const inputField = document.getElementById(id);
      const inputValue = inputField.value;
      return inputValue;
}
const addProduct = () => {
      const product = getInputValueById('product-name-field')
      const quantity = getInputValueById('product-quntity-field')
      // display product ui 
      addDisplayProducts(product, quantity)
      saveitemToLocalStroage(product, quantity)
      // console.log(product, quantity)
      // localStorage.setItem(product,quantity)

}
const getShopingCartFromLocalStroage = () => {
      let cart = {};
      let saveCart = localStorage.getItem('cart');
      if (saveCart) {
            cart = JSON.parse(saveCart)
      }
      return cart;
}
const saveitemToLocalStroage = (product, quantity) => {
      const cart = getShopingCartFromLocalStroage();
      cart[product] = quantity     
      const cartStingified = JSON.stringify(cart)
      localStorage.setItem('cart', cartStingified)

}
const addDisplayProducts = (product, quantity) => {
      const productContainer = document.getElementById('product-container')
      const li = document.createElement('li')
      li.innerText = `${product} - ${quantity}`
      productContainer.appendChild(li)
}
const savedDisplayProduct = () => {
      const cart = getShopingCartFromLocalStroage()
      for (const product in cart) {
            const quantity = cart[product]
            console.log(product, quantity)
            addDisplayProducts(product,quantity)
      }
}
savedDisplayProduct();