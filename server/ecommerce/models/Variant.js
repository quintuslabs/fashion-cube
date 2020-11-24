
var mongoose    = require('mongoose');

var variantSchema  = mongoose.Schema({
    productID: {
        type: String
    },
    imagePath: {
        type: String
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    quantity: {
        type: Number
    },
    title: {
        type: String
    },
    price: {
        type: Number
    }
});

var Variant = module.exports = mongoose.model('Variant', variantSchema);

module.exports.getVariantByID = function(id, callback){
    Variant.findById(id, callback);
}

module.exports.getVariantProductByID = function(id, callback){
    var query = {productID: id};
    Variant.find(query, callback);
}
module.exports.getAllVariants = function(callback){
    Variant.find(callback)
}