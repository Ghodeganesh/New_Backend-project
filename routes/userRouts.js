const express = require("express")
const router = express.Router()
const { handlerReadUsers, handlerCreateUsers, handleParameterData } = require('../controllers/user')


router.get('/', handlerReadUsers)
router.get('/:workType', handleParameterData)
router.post('/', handlerCreateUsers)



module.exports = router
