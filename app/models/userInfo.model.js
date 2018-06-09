var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var model = new Schema({
    telNumber:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    lpassword:{type:String,required:true},
    status:{type:String}
})

module.exports = mongoose.model('UserInfo', model);