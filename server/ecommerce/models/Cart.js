
const mongoose = require('mongoose')

CartSchema = mongoose.Schema({
  items: {
    type: Object
  },
  totalQty: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  userId: {
    type: String
  }
})

var Cart = module.exports = mongoose.model('Cart', CartSchema)

module.exports.getCartByUserId = function (uid, callback) {
  let query = { userId: uid }
  Cart.find(query, callback)
}

module.exports.getCartById = function (id, callback) {
  Cart.findById(id, callback)
}

module.exports.updateCartByUserId = function (userId, newCart, callback) {
  let query = { userId: userId }
  Cart.find(query, function (err, c) {
    if (err) throw err

    //exist cart in databse
    if (c.length > 0) {
      Cart.findOneAndUpdate(
        { userId: userId },
        {
          $set: {
            items: newCart.items,
            totalQty: newCart.totalQty,
            totalPrice: newCart.totalPrice,
            userId: userId
          }
        },
        { new: true },
        callback
      )
    } else {
      //no cart in database
      newCart.save(callback)
    }
  })
}

module.exports.updateCartByCartId = function (cartId, newCart, callback) {
  Cart.findById(
    { _id: cartId },
    {
      $set: newCart
    },
    callback
  )
}



module.exports.createCart = function (newCart, callback) {
  newCart.save(callback)
}