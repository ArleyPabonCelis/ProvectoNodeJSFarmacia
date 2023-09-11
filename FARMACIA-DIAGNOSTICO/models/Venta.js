// Importacion del mongoose
const {Schema, model} = require('mongoose');


// Schema de Ventas
const VentaSchema = Schema({
    fechaVenta : {
        type : Date,
        required : [true, 'Fecha de venta es requerido']
    },

    paciente : {
        /* type : Object, */
        nombre : {
            type : String,
            required : [true, 'Nombre del paciente es requerido']
        },
        direccion : {
            type : String,
            required : [true, 'Contacto del paciente es requerido']
        }
    },

    empelado : {
        /* type : Object, */
        nombre : {
            type : String,
            required : [true, 'Nombre del empleado es requerido']
        },
        cargo : {
            type : String,
            required : [true, 'Contacto del empleado es requerido']
        }
    },

    medicamentosVendidos : [
        {
            nombreMedicamento : {
                type : String,
                required : [true, 'Nombre del medicamento es requerido']
            },
            cantidadVendida : {
                type : Number
            },
            precio : {
                type : Number
            }
        }
    ]
});

module.exports = model('Venta', VentaSchema)