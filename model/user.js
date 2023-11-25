const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        
    },
    phone:{
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('user',userSchema);