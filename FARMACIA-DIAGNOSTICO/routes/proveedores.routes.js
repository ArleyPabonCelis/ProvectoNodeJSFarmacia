//Importaciones
const {Router} = require('express')
const {getProveedore} = require('../controllers/proveedores.controllers.js')

// router //
const router = Router();


//metodos http //
router.get("/proveedores", getProveedore);


// Exportar el router
module.exports = router;