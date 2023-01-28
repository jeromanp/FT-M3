const { Router } = require("express");
const {
  getUsers,
  findUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/usersController");

const usersRouter = Router();
//USUARIOS

//GET /users => devuelve los users
//GET /users?name= => devuelve todos los usuarios con un nombre
usersRouter.get("/", (req, res) => {
  const { name } = req.query;
  let users;
  try {
    if (name) {
      users = findUsers(name);
    } else {
      users = getUsers();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//GET /users/:id => devuelve un usuario con id especifico
usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const user = getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//POST /users => crear un usuario nuevo
usersRouter.post("/", (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = createUser(name, email);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//PUT /users => modificar un usuario especifico
usersRouter.put("/", (req, res) => {
  const { id, name, email } = req.body;
  try {
    const updateUs = updateUser(id, name, email);
    res.status(200).json(updateUs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE /users/:id/delete => eliminar un usuario especifico
usersRouter.delete("/:id/delete", (req, res) => {
  const {id}=req.params
  try {
    const deleted = deleteUser(id)
    res.status(200).json(deleted)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
});

module.exports = usersRouter;
