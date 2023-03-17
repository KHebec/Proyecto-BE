const mongoose = require("mongoose")
const Schema = mongoose.Schema

const petshopSchema = new Schema({
    marca:{
        type: String,
        required: true
    },
    kg:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    tieneCambio:{
        type: Boolean,
        required: false
    },
    stock:{
        type: Number,
        required: true
    }
})

const Petshop = mongoose.model("Petshop",petshopSchema)
module.exports = {Petshop}