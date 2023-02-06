var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    invoiceNumber:{type:String, required:true},
    billDate:{type:Date, required:true},
    party:{type:String},
    address1:{type:String},
    address2:{type:String},
    city:{type:String},
    state:{type:String},
    gstNo:{type:String},
    panAadhar:{type:String},
    gstType:{type:String},
    transport:{type:String},
    billItems:{type:Object, required:true},
    billAmount:{type:Number},
    totalCases:{type:Number},
    pkgCharge:{type:Number},
    taxableValue:{type:Number},
    cgst:{type:Number, default:0},
    sgst:{type:Number, default:0},
    igst:{type:Number, default:0},
    totalBillValue:{type:Number},
    finalBillValue:{type:Number},
    amountInWords:{type:String}
});

module.exports = mongoose.model('Bill', schema);