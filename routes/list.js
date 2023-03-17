const express = require("express")
const router = express.Router()
const {verApi, verProductos, crearProductos, vistaUnicaProducto, editProducto, deleteProducto} = require("../controllers/indexController");
const { validarId }= require("../middlewares/validarid")
const{check}= require("express-validator")

//GET
router.get('/ver', verProductos)
router.get('/stock', verProductos)
router.get("/ver/:id", vistaUnicaProducto)
router.get("/woof", verApi)

//POST
router.post("/crear", [
    check("marca").not().isEmpty().withMessage("El campo marca es requerido.").isLength({max: 16}),
    check("kg").not().isEmpty().withMessage("Es necesario indicar cantidad.").isLength({max: 4}).withMessage("El campo no puede tener mas de 3 numeros."),
    check("precio").not().isEmpty().isInt().withMessage("El campo precio es requerido.").isLength({min: 2, max: 6}),
    check("tieneCambio").not().isEmpty().isBoolean().withMessage("Por favor coloque true si tiene cambio o false si no lo tiene."),
    check("stock").not().isEmpty().withMessage("Este producto no cuenta con stock.")
], crearProductos)

//PUT
router.put("/edit/:id", validarId, [
    check("marca").not().isEmpty().withMessage("El campo marca es requerido.").isLength({max: 16}),
    check("kg").not().isEmpty().withMessage("Es necesario indicar cantidad.").isLength({max: 4}).withMessage("El campo no puede tener mas de 3 numeros."),
    check("precio").not().isEmpty().isInt().withMessage("El campo precio es requerido.").isLength({min: 2, max: 6}),
    check("tieneCambio").not().isEmpty().isBoolean().withMessage("Por favor coloque true si tiene cambio o false si no lo tiene."),
    check("stock").not().isEmpty().withMessage("Este producto no cuenta con stock.")
], editProducto)

//DELETE
router.delete("/delete/:id", validarId, deleteProducto)


module.exports = router