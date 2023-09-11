//Importaciones
const {Router} = require('express')
const {getMedicamento} = require('../controllers/medicamentos.controllers.js')

// router //
const router = Router();


//metodos http //
router.get("/medicamentos", getMedicamento);


// Exportar el router
module.exports = router;