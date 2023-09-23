const bankAccountModel = require("../models/BankAccount")
const transactionModel = require("../models/transaction")

const sendMoney = async(req,res)=>{
    try{
         const {sender,reciver,amount} = req.body

         const senderdetails = await bankAccountModel.findOne({accountNumber:sender})
         if(senderdetails.balance<amount){
           return res.status(400).json({
                message:"insufficient funds",
            })
         }
        
        const updatedBalanceInfosender =  await bankAccountModel.findOneAndUpdate({accountNumber:sender},
                {$inc:{balance:-amount}},
                {new:true}
            )
        const updatedBalanceInfoReciver =  await bankAccountModel.findOneAndUpdate({accountNumber:reciver},{
            $inc:{balance:amount}
        })

        const recordTransaction  = await transactionModel.create({
            sender,
            reciver,
            amount,
            date:new Date()
        })
        return res.status(201).json({
            message:"money sent successfully",
            remainigBalance:updatedBalanceInfosender.balance,
            transactionID:recordTransaction._id
        })


    }catch(err){
            return res.status(400).json({
                error:err.message
            })
    }
}

module.exports = {sendMoney}