const {handlerCreateUser}=require('../controllers/user')
// const express=require("express")
// const app=express()
const authMd=require('../middleware/auth')

module.exports = function (app) {
    // Your route handling code here
    app.post('/user',[authMd.verifyUserData],handlerCreateUser)
};



