// Importacion del mongoose
const {Schema, model} = require('mongoose');


// Schema de Medicamentos
const MedicamentoSchema = Schema({
    nombre : {
        type : String,
        required: [true, 'Nombre es requerido']
    },
    precio : {
        type : Number,
        required : [true, 'Precio es requerido']
    },
    stock : {
        type : Number,
        required : [true, 'Stock es requerido']
    },
    fechaExpiracion : {
        type : Date,
        required : [true, 'Fecha de expiracion es requerido']
    },
    proveedor : {
        /* type : Object, */
        nombre : {
            type : String,
            required : [true, 'Nombre del proveedor es requerido']
        },
        contacto : {
            type : String,
            required : [true, 'Contacto del proveedor es requerido']
        }
    }
});

module.exports = model('Medicamento', MedicamentoSchema)