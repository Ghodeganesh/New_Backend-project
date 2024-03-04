const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    std_id: Number,
    std_course: String
}, { timestamps: true })


const student = mongoose.model('student', studentSchema)
module.exports = student