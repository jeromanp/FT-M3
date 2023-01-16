const { Router } = require("express");
const database = require("../database");

const apiRouter = Router();

//si ponemos esto en insomnia:
//localhost:3001/api?name=Jorge&apellido=Vega
//req.query es un objeto que se arma con las propiedades que se pasan en la url
// apiRouter.get("/", (req, res) => {
//   console.log(req.query);  //===> {name:"Jorge", apellido:"Vega"}
// });

//ya no es necesario poner "/api"
apiRouter.get("/", (req, res) => {
  const { name } = req.query;
  //   console.log(name) ==> name que se le pase por req.query
  if (name) {
    //se puede agregar un toLowerCase por si el usuario pone el name en minusculas
    const searchResults = database.filter((char) => char.name === name);
    res.status(200).json(searchResults);
  } else {
    res.status(200).json(database);
  }
});

apiRouter.get("/:id", (req, res) => {
  try {
    //toma el id de la url
    const { id } = req.params;
    const character = database.find((char) => char.id === Number(id));
    if (!character) throw Error("The character does not exist");
    res.status(200).json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//en insomnia hay que cambiar a POST y en pestaña Body, pone JSON
//agregar el obj: ejm {"name":"Jose Eduardo","gender":"Male"}

apiRouter.post("/", (req, res) => {
  // console.log(req.body) //==>{"name":"Jose Eduardo","gender":"Male"}
  //haciendo en insomnia un GET a /api
  const { name, gender } = req.body;
  const newCharacter = {
    id: database.length + 1,
    name,
    gender,
    species: "Human",
    status: "Alive",
  };
  database.push(newCharacter);
  res.status(200).json({created:newCharacter})
});

module.exports = apiRouter;
