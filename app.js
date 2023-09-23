const express =  require('express')
const mongoose = require('mongoose')
const { accountRouter } = require('./routes/bankAccountRouter')


const app = express()
app.use(express.json())
app.use(accountRouter)
mongoose.connect('mongodb://127.0.0.1/bank').then(()=>{
    console.log("database is connected")
})
.catch(err=>{
    console.log(err)
})

app.listen(7000,()=>{
    console.log('app listening at port 7000')
})

