// Object modelling for department. This model will represent in the database and
// we will read the all the information according to this model.
// You can think that this is a representation of the database and we are using that
// for saving, reading, updating information from the database.

var mongoose = require('mongoose');

var departmentSchema = mongoose.Schema({
    departmentName: {
        type: String,
        index: true
    },
    categories: {
        type: String
    }
});

var Department = module.exports = mongoose.model('Department', departmentSchema);

// These are functions to get data from the database. You can even reach the information
// without calling this functions but I just want to show you how you can add some functions
// to your model file to get specific data.

module.exports.getAllDepartments = function (query, callback) {
    Department.find(query, callback)
}
module.exports.getDepartmentById = function (id, callback) {
    Department.findById(id, callback);
}