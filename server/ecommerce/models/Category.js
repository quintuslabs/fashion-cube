// Object modelling for category. This model will represent in the database and
// we will read the all the information according to this model.
// You can think that this is a representation of the database and we are using that
// for saving, reading, updating information from the database.

var mongoose    = require('mongoose');

var categorySchema  = mongoose.Schema({
    categoryName: {
        type: String,
        index   : true
    }
});

var Category = module.exports = mongoose.model('Categories', categorySchema);

// These are functions to get data from the database. You can even reach the information
// without calling this functions but I just want to show you how you can add some functions
// to your model file to get specific data.

module.exports.getAllCategories = function(callback){
    Category.find(callback)
}

module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}