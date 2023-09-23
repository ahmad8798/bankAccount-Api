
const bankAccountModel = require("../models/BankAccount")
const { generateAccountNumber } = require("../utils/AccountNumber")


const openAccount  = async(req,res)=>{
    try{
        const {name,gender,dob,email,phoneNo,balance,adharNo,panNo} = req.body
        console.log(req.body)
        const openingAccount = await bankAccountModel.create({
            name,gender,dob,email,phoneNo,balance,adharNo,panNo,accountNumber:generateAccountNumber()
        })

     
     res.status(201).json({
        openingAccount
     })
    }catch(err){
            res.status(400).json({
                error:err.message
            })
    }
}


const updateKyc = async(req,res)=>{
    try{
        const {adharNo,panNo,email,dob,phoneNo,_id} = req.body
        const updatedKyc = await bankAccountModel.findByIdAndUpdate({_id},{adharNo,panNo,email,phoneNo,dob})
        res.status(200).json({
            updatedKyc
        })
    }catch(err){
            res.status(400).json({
                err
            })
    }
}


module.exports = {openAccount,updateKyc}