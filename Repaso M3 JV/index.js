//para probar que nodemon escuche este archivo
//console.log("Hola");

//levanta el server y ponerlo a escuchar en un puerto

const app = require("./src/app")


const PORT = 3001
app.listen(PORT, ()=>{
    console.log("Listening on port ",PORT);
})