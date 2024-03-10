const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowrcase: true
    },
    work: {
        type: String,
        require: true,
        enum:['chef','manager','waiter']
    },
    
}, {
    timestamps: true
})


const userData = mongoose.model("new_user", userSchema)

module.exports = {
    userData
}