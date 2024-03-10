const express = require("express")
const routes = express.Router()
const { handlerReadMenu, handlerCreateMenu,handlerGiveName } = require('../controllers/menuitems')

routes.get('/', handlerReadMenu)
routes.post('/', handlerCreateMenu)
routes.get('/:name',handlerGiveName)

module.exports = routes 