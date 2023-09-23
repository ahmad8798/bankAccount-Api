const express = require('express')
const { openAccount, updateKyc } = require('../controllers/AccountController')
const { sendMoney } = require('../controllers/moneyTransactionController')

const accountRouter = express.Router()

accountRouter.route('/openAccount').post(openAccount)
accountRouter.route('/updatekyc').put(updateKyc)
accountRouter.route("/sendMoney").post(sendMoney)
module.exports  = {accountRouter}