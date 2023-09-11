// Importacion del mongoose
const {Schema, model} = require('mongoose');


// Schema de Medicamentos
const ProveedoreSchema = Schema({
    nombre : {
        type : String,
        required: [true, 'Nombre es requerido']
    },
    contacto : {
        type : String,
        required : [true, 'Contacto del proveedor es requerido']
    },
    direccion : {
        type : String,
        required : [true, 'Nombre del proveedor es requerido']
    }
});

module.exports = model('Proveedore', ProveedoreSchema)