const mongoose = require("mongoose")

const user_model = require('../models/user.model')

const handlerReadUsers = async (req, res) => {
    const data = await user_model.userData.find()
    res.status(200).send(data)

}
const handlerCreateUsers = async (req, res) => {
    const data = req.body
    const user = await user_model.userData.create(data)
    res.send(data).status(200)

}
const handleParameterData = async (req, res) => {
    try {
        const workType = req.params.workType
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
          const rdata = await user_model.userData.find({ work: workType })
            res.status(203).send(rdata)
        }
        else {
            res.status(404).send("invalid WorkTye Provided!!!")
        }
    } catch (error) {
        console.log("erorr somthing wents wrong", error)

    }
}

module.exports = {
    handlerReadUsers,
    handlerCreateUsers,
    handleParameterData
}
