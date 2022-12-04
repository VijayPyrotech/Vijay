var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type:String, required:true},
    address1:{type:String},
    address2:{type:String},
    city:{type:String},
    state:{type:String, required:true},
    gstNo:{type:String},
    panAadhar:{type:String},
    gstType:{type:String, required:true}
});

module.exports = mongoose.model('Client', schema);