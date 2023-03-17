const{Petshop}= require("../models/petshop")
const{validationResult}= require("express-validator")
const axios = require("axios")
let url = "https://random.dog/woof.json"
let data = {
    fileSizeBytes: "",
    url: ""
}

const verApi = async (req, res)=>{
  
  try {
    const respuesta = await axios.get (url,data).then(response =>{
      res.json({data: response.data, status: response.status});
    });
  } catch (error) {
    res.json({data: error.response.data, status: error.response.status});
  }
}

const verProductos = async(req,res)=>{
    const producto = await Petshop.find()
    res.status(200).json({producto})
}

const crearProductos = async(req,res)=>{
    try {
      const err = validationResult(req)
      if (err.isEmpty()) {
        const item = new Petshop(req.body)
        await item.save()
        res.status(201).json({item})
      } else {
        res.status(501).json({err})
      }
      
    } catch (error) {
      res.status(501).json({error})
    }
}

const vistaUnicaProducto = async(req,res)=>{
    const item= await Petshop.findById(req.params.id)
    res.status(200).json({item})
}

const editProducto = async(req,res)=>{
    try {
      const err= validationResult(req)
      if (err.isEmpty) {
        await Petshop.findByIdAndUpdate(req.params.id, req.body)
      res.status(201).json({msg: "se actualizo el producto"})
      } else {
        res.status(501).json({err})
      }
      
    } catch (error) {
      res.status(501).json({error})
    }
}
  
const deleteProducto = async(req,res)=>{
    const item = await Petshop.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: "El producto fue eliminado", item})
    
}

module.exports = {verApi, verProductos, crearProductos, vistaUnicaProducto, editProducto, deleteProducto}