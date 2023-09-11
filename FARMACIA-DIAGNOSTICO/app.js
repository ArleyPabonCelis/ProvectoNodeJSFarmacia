// Importaciones
require('dotenv').config();
const Server = require('./models/server.js');

// Instanciar la clase //
const server = new Server();

//Llamar el metodo listen //
server.listen();