// Importaciones
const Venta  = require('../models/Venta.js')

// funciones HTTP
const getVenta = async (req, res) => {
    Venta.find()
        .then(ventas => {
            res.json(ventas);
        })
        .catch(error => {
            res.status(500).json({error : "Error"})
        });
}


//Exportar funciones HTTP
module.exports = {
    getVenta
}