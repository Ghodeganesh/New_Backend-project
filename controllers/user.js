const user_module = require("../models/user.model")
const bcrypt = require("bcryptjs")


async function handlerCreateUser(req,res) {

    const req_body = req.body;
 

    const obj={
        name: req_body.name,
        userId: req_body.userId,
        userType: req_body.userType,
        email: req_body.email,
        password: bcrypt.hashSync(req_body.password, 8)
    }
    try {
        const data= await user_module.create(obj)
        console.log(data)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
  
}

module.exports = {
    handlerCreateUser,
}