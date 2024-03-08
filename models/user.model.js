const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        lowrcase: true,
        require: true,
        minLenght: 8
    },
    userId: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        require: true,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const user = mongoose.model("user", userSchema)

module.exports=user