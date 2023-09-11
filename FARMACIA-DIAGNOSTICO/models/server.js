// Importaciones
const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js')

//Declaracion de la clase //
class Server {
    constructor(){
        this.app = express();
        // Agregamos el path// 
        this.farmaciaPath = "/api/farmacia";

        // Inicilizar puerto //
        this.port = process.env.port;

        // Conexion base de datos MondgoDB
        this.connectDB();

        //Middlewares
        this.middlewares();
        //Routing
        this.routes();  
    }

    // Funcion para conectar a base de datos MongoDB
    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //PUBLIC DIRECTORY
        this.app.use(express.static('public'))
    }

    routes(){
       //Referenciar los metodos
       this.app.use(this.farmaciaPath, require('../routes/medicamentos.routes.js'));
       this.app.use(this.farmaciaPath, require('../routes/ventas.routes.js'));
       this.app.use(this.farmaciaPath, require('../routes/proveedores.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT : ${this.port}`);
        });

    }
}

// Exportar la clase
module.exports = Server;