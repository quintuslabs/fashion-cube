const cartModel = require('../models/Cart')

class Cart {
  constructor(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.userId = oldCart.userId || "";
  }

  add(item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = parseFloat((storedItem.item.price * storedItem.qty).toFixed(2));
    this.items[id]=storedItem
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2))
    return this
  }

  generateModel(){
    let newCart = new cartModel({
      items: this.items,
      totalQty: this.totalQty,
      totalPrice: this.totalPrice,
      userId: this.userId
    })
    return newCart
  }

  decreaseQty(id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.items[id].price = parseFloat(this.items[id].price.toFixed(2))
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2))
    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
    return this
  }

  increaseQty(id) {
    this.items[id].qty++;
    this.items[id].price += this.items[id].item.price;
    this.items[id].price = parseFloat(this.items[id].price.toFixed(2))
    this.totalQty++;
    this.totalPrice += this.items[id].item.price
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2))
    return this
  }

  generateArray() {
    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id])
    }
    return arr;
  }
}

module.exports = Cart