var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type:String, required:true},
    place:{type:String},
});

module.exports = mongoose.model('Transport', schema);