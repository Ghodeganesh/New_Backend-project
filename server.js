const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv").config()
const bcryp = require("bcryptjs")
const bodyParser = require('body-parser');
const user_module = require("./models/user.model.js")
const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// MongoDb Connectsion Startes.....

mongoose.connect(process.env.DB_URL)

const db = mongoose.connection

db.on("err", () => {
    console.log("Error Occured!!")
})
db.once("open", () => {
    console.log("DataBase Connected!!")
    init()
})

require('./routes/user.js')(app)
// user.js


// Mongodb Connection Ends Here......


// Creating Servers Using Express......
app.listen(process.env.PORT, () => {
    console.log(`Server Started On Port No : ${process.env.PORT}`)
})

// Creating A Admin 

async function init() {
    let user = await user_module.findOne({ userId: "admin" })

    if (user) {
        console.log("Admin Alredy Present!!")
        return
    }

    try {
        user = await user_module.create({
            name: "tejas",
            password: bcryp.hashSync("tejas123",8),
            userId: "admin",
            userType: "ADMIN",
            email: "tejasgholap2002@gmail.com"
        })
    } catch (error) {
        console.log("erro while creating admin", error)
    }
}
