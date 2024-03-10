const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { handlerReadMenu, handlerCreateMenu} = require('./controllers/menuitems')
const user_model = require('./models/user.model')
const { handlerReadUsers, handlerCreateUsers, handleParameterData } = require('./controllers/user')
const db = require('./db')

app.use(bodyparser.json())



app.get('/', handlerReadUsers)
app.get('/:workType',handleParameterData)
app.post('/', handlerCreateUsers)

app.get('/menu', handlerReadMenu)
app.post('/menu', handlerCreateMenu)
app.listen(process.env.PORT, () => {
    console.log("Server Started On Port No :", process.env.PORT)
})