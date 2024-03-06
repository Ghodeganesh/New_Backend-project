const {handlerCreateUser}=require('../controllers/user')
// const express=require("express")
// const app=express()


module.exports = function (app) {
    // Your route handling code here
    app.post('/user',handlerCreateUser)
};



