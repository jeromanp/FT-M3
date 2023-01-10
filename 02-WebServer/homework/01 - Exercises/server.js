var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

let servidor = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);

    if (req.url === "/api") {
       //no poner el punto al inicio de la ruta
      //te tardaste 1 hora buscando ese problema :(
      fs.readFile(__dirname + "/utils/dogsData.json", "UTF8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("json not found");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        }
      });
      return;
    }

    else if (req.url === "/allDogs") {
      //no poner el punto al inicio de la ruta
      //te tardaste 1 hora buscando ese problema :(
      fs.readFile(__dirname + "/utils/allDogs.html", "UTF8", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("html not found");
        } else {
          res.writeHead(200,  { 'Content-Type':'text/html' } );
          res.end(data);
        }
      });
      return;
    }

    else{
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("Route not found")
    }

  }).listen(PORT, "localhost");

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  servidor;
