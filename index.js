const mongoose = require('mongoose')
const user = require('./models/user.model.js')
const student = require('./models/student.model.js')
mongoose.connect("mongodb://127.0.0.1:27017/new_project")

const db = mongoose.connection

db.on("error", () => {
    console.log("Error Occured!!!")
})
db.once("open", () => {
    console.log("Succesfully Connected To MongoDb!!!");
    init()
    delete_data()
    data_read()
})


async function init() {
    // const data = {
    //     name: "ganeshGhode",
    //     age: 21,

    // }
    // const data2 = {
    //     name: "sahil",
    //     age: 23,

    // }

    // const data_obj = await user.create(data,data2)
    // console.log(data_obj)

    const data = {
        name: "harshal",
        std_id: 2021082,
        std_course: "Computer_Engineering"
    }

    const stu_data = await student.create(data)
    // console.log(stu_data)
}

async function data_read() {

    try {
        // const fetched_data = await user.findById('65e57ce1f44045aa0280086f')
        const fetched_data = await user.find({_id:"65e57c98b29fef3544bc1c13"})
        console.log("Searched Person is : ")
        console.log(fetched_data)
    } catch (error) {
        console.log("Error Occured : ", error)
    }
}
async function delete_data(){
    const data=await user.findByIdAndDelete('65e57c98b29fef3544bc1c13')
    console.log("the deleted data is : ")
    console.log(data)

}