// Importaciones
const Proveedore  = require('../models/Proveedore.js')

// funciones HTTP
const getProveedore = async (req, res) => {
    Proveedore.find()
        .then(proveedores => {
            res.json(proveedores);
        })
        .catch(error => {
            res.status(500).json({error : "Error"})
        });
}

//Exportar funciones HTTP
module.exports = {
    getProveedore
}