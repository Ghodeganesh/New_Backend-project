const user_module = require("../models/user.model")


const verifyUserData = async function (req, res, next) {
    try {
        const data = req.body
        if (!data.name) {
            res.status(400).json("failed to login name not provided!!!")
        }
        if (!data.password) {
            res.status(400).json("failed to login password not provided!!!")
        }
        if (!data.userId) {
            res.status(400).json("failed to login userId not provided!!!")
        }
        if (!data.email) {
            res.status(400).json("failed to login email not provided!!!")
        }
        if (!data.userType) {
            res.status(400).json("failed to login userType not provided!!!")
        }

        next()
    } catch (error) {
        console.log("Failde to load Error Occured!!", error)
    }
}

module.exports={
    verifyUserData
}