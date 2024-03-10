const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const user_model = require('./models/user.model')
const db = require('./db')
const userRouts = require("./routes/userRouts.js")
const menuRouts = require("./routes/menuRouter.js")
app.use(bodyparser.json())


app.use('/user', userRouts)
app.use('/menu', menuRouts)
// app.get('/', handlerReadUsers)
// app.get('/:workType',handleParameterData)
// app.post('/', handlerCreateUsers)

// app.get('/menu', handlerReadMenu)
// app.post('/menu', handlerCreateMenu)
app.listen(process.env.PORT, () => {
    console.log("Server Started On Port No :", process.env.PORT)
})