//se uso insomnia para validar las rutas
//se debe usar para observar el consologueo de lo que se pone
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/routes")

//se crea el servidor ejecutando express
const server = express();

//.use para crear un middleware (funciones) antes de llegar al endpoint
server.use((req, res, next) => {
  console.log("Estamos pasando por un middleware");
  next();
});

//morgan es un middleware
//muestra la info sobre la request, el estatus y el tiempo y la linea del codigo
//"dev" es el formato en la que morgan muestra las cosas, hay varios tipos, este es el mas empleado
server.use(morgan("dev"));

//convierte cualquier body que se reciba en la request se convierte a formato javascript
server.use(express.json())

server.use(mainRouter)

module.exports = server;
