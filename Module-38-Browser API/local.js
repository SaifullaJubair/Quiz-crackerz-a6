const getInputValueById = id=> {
      const inputField= document.getElementById(id)
      const inputValue = inputField.value;
      inputField.value =''
      return inputValue;
}
const addProduct= () => {
      const product = getInputValueById('input-text-field')
      const quantity = getInputValueById('quantity-field')
      // console.log(product, quantity)
      // setProduct = localStorage.setItem(product,quantity)
      addProductToDisplay(product, quantity)
      saveitemToLocalStroage(product , quantity)
}
const getShopingCartFromLocalStroage = () => {
      let cart = {};
      let saveCart = localStorage.getItem('cart')
      if (saveCart) {
            cart = JSON.parse(saveCart)
      }
      return cart;
}
const saveitemToLocalStroage = (product, quantity) => {
      const cart = getShopingCartFromLocalStroage();
      // add product to the object as property 
      cart[product] = quantity;
      const cartStingified = JSON.stringify(cart);
      // save to localStorage 
      localStorage.setItem('cart',cartStingified)
}
const addProductToDisplay = (product, quantity) => {
      const productContainer = document.getElementById('product-container')
      const li = document.createElement('li')
      li.innerText =`${product} : ${quantity}`
      productContainer.appendChild(li)
}
const displayStoredProduct = () => {
      const cart = getShopingCartFromLocalStroage();
      for (const product in cart) {
            const quantity = cart[product]
            console.log(product, quantity)
            addProductToDisplay(product , quantity)
      }
}
displayStoredProduct();
