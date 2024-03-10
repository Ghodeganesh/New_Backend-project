// const menudata = require("../models/menu.model")
const menudata = require("../models/menu.model.js")

const handlerCreateMenu = async (req, res) => {
    const bodydata = req.body
    try {
        const menu = await menudata.menuItems.create(bodydata)
        return res.status(201).send(menu)

    } catch (error) {
        console.log("Erorr While Creating MenuItems", error)
    }

}

const handlerReadMenu = async (req, res) => {

    try {
        const menu = await menudata.menuItems.find()
        res.status(201).send(menu)

    } catch (error) {
        console.log("Erorr While Reading MenuItems", error)
    }

}
const handlerGiveName = async (req, res) => {

    try {
        const menu = await menudata.menuItems.find()
        res.status(201).send(menu)

    } catch (error) {
        console.log("Erorr While Reading MenuItems", error)
    }

}

module.exports = {
    handlerCreateMenu,
    handlerReadMenu,
    handlerGiveName
}