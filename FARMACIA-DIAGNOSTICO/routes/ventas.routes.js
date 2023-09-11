//Importaciones
const {Router} = require('express')
const {getVenta} = require('../controllers/ventas.controllers.js')

// router //
const router = Router();


//metodos http //
router.get("/ventas", getVenta);


// Exportar el router
module.exports = router;