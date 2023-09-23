const mongoose = require('mongoose')

const bankAccount = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNo:{
        type:Number,
        required:true,
        unique:true
    },
    accountNumber:{
        type:Number,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        required:true,

    },
    adharNo:{
        type:Number,
        required:true
    },
    panNo:{
        type:Number,
        required:true
    }
})


const bankAccountModel = mongoose.model('bankAccount',bankAccount)

module.exports = bankAccountModel