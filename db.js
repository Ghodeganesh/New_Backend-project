const dotenv = require('dotenv').config()
const mongoose = require("mongoose")


mongoose.connect(process.env.DB_URL)
const dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log("error Occured!!")
})
dbconnect.once('open',()=>{
    console.log("Db Connected!!")
})

module.exports={
    dbconnect
}