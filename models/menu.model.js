const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    price: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    taste: {
        type: String,
        require: true,
        enum: ['spicy', "sweet", "crunchy"]
    },
    is_drink: {
        type: Boolean,
        require: true,
        default: false
    }
   
}, { timestamps: true })

const menuItems = mongoose.model("menuItem", menuSchema)
module.exports = {
    menuItems
}