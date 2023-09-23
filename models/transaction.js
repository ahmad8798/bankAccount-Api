const mongoose = require('mongoose')

const transaction = new mongoose.Schema({
    sender:{
        type:Number,
        required:true
    },
    reciver:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date
    }
})

const transactionModel = mongoose.model('transaction',transaction)

module.exports = transactionModel