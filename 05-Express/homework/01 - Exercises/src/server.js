// const bodyParser = require("body-parser");
const express = require("express");

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let publications = [];

// let publications=[{
//   "id":"1",
// 	"author":"Jose",
// 	"title":"Dev",
// 	"contents": " mundo !!!"
// }, {
//   "id":"2",
// 	"author":"Jose 2",
// 	"title":"Hola",
// 	"contents": "Mundo"
// },{
//   "id":"3",
// 	"author":"Paco",
// 	"title":"Cocina",
// 	"contents": "Mexico"
// }]

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

///////////////////////////////////////////////////////////////////////////////////////
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    res.status(400).json({
      error:
        "No se recibieron los parámetros necesarios para crear la publicación",
    });
  } else {
    let index = 0;
    const newPublication = {
      id: index + 1,
      author,
      title,
      contents,
    };
    publications.push(newPublication);
    res.status(200).json(newPublication);
  }
});

///////////////////////////////////////////////////////////////////////////////////////

server.get("/posts", (req, res) => {
  const { term, author, title } = req.query;

  if (term) {
    const searchTerm = publications.filter(
      (post) => post.title.includes(term) || post.contents.includes(term)
    );
    if (searchTerm.length > 0) {
      res.status(200).json(searchTerm);
    } else {
      res.status(200).json(publications);
    }
  } else if (author && title) {
    const search = publications.filter(
      (post) => post.title === title && post.author === author
    );
    if (search.length > 0) {
      res.status(200).json(search);
    } else {
      res
        .status(400)
        .json({
          error:
            "No existe ninguna publicación con dicho título y autor indicado",
        });
    }
  } else {
    res.status(200).json(publications);
  }
});

///////////////////////////////////////////////////////////////////////////////////////

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const filterAuthor = publications.filter((post) => post.author === author);
  if (filterAuthor.length <= 0) {
    res.status(400).json({ error: "No existe ningun post del autor indicado" });
  } else {
    res.status(200).json(filterAuthor);
  }
});

///////////////////////////////////////////////////////////////////////////////////////

server.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  const index = publications.find((ele) => ele.id === Number(id));

  if (!title || !contents) {
    res.status(400).json({
      error:
        "No se recibieron los parámetros necesarios para modificar la publicación",
    });
  } else if (!index) {
    res.status(400).json({
      error:
        "No se recibió el id correcto necesario para modificar la publicación",
    });
  } else {
    const renamePublication = {
      ...publications,
      title: title,
      contents: contents,
    };
    res.status(200).json(renamePublication);
  }
});

///////////////////////////////////////////////////////////////////////////////////////

server.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const searchId = publications.find((ele) => ele.id === id);

  if (!id) {
    res
      .status(400)
      .json({ error: "No se recibió el id de la publicación a eliminar" });
  } else if (!searchId) {
    res
      .status(400)
      .json({
        error:
          "No se recibió el id correcto necesario para eliminar la publicación",
      });
  } else {
    const deletePublication = publications.find((ele) => ele.id !== id);
    res.status(200).json({ success: true });
  }
});

///////////////////////////////////////////////////////////////////////////////////////

server.delete("/author/:name", (req, res) => {
  const { name } = req.params;
  // console.log(name)
  const validateName = publications.filter((ele) => ele.author === name);
  // console.log(validateName);

  if (!name) {
    return res.status(400).json({ error: "No se recibió el nombre del autor" });
  } else if (!validateName) {
    return res
      .status(400)
      .json({
        error:
          "No se recibió el nombre correcto necesario para eliminar las publicaciones del autor",
      });
  } else {
    const deleteName = publications.filter((ele) => ele.author !== name);
    // console.log("array que se elimina ===>",validateName); //me retorna los autores que coinciden
    // console.log("array restante ===>",deleteName);
    res.status(200).json(validateName);
  }
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };

///////////////////////////////////////////////////////////////////////////////////////
