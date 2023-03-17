const{Petshop}= require("../models/petshop")


const validarId = async(req, res, next)=>{
    try {
        const item = await Petshop.findById(req.params.id)
        if (item!== null) {
            next()
    } else {
        res.status(500).json({msg: "El ID es incorrecto, intente nuevamente"})
    }
    } catch (error) {
        res.status(500).json({error})
    }
}

    module.exports={ validarId }