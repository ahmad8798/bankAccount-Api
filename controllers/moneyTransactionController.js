const bankAccountModel = require("../models/BankAccount")

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
        return res.status(201).json({
            message:"money sent successfully",
            remainigBalance:updatedBalanceInfosender.balance

        })


    }catch(err){
            return res.status(400).json({
                error:err.message
            })
    }
}

module.exports = {sendMoney}