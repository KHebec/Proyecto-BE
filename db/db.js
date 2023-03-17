const mongoose = require("mongoose")
require("dotenv").config()

const conect = async() => {
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("conexion total a la base de datos")
    } catch {
        console.log("error de conexion")
    }
}

module.exports = {conect}