// Importacion de mongoose //
const mongoose = require('mongoose');

// Conexion a la base de datos //
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log('DB ONLINE FUNCIONANDO');
    } catch (error) {
        console.log(error);
        throw new Error("DB CAN'T INICIALIZES")
    }
}


//Exportar la conexion
module.exports = {
    dbConnection
}