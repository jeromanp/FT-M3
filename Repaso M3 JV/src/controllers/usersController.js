//Todos los controladores de usuarios
let { users } = require("../data");
const { unsubscribe } = require("../routes/usersRouter");

let id = 3;

const getUsers = () => {
  return users;
};

const findUsers = (name) => {
  const results = users.filter((user) => user.name === name);
  if (!results.length) throw Error("Users not found");
  return results;
};

const getUserById = (id) => {
  const user = users.find((user) => user.id === Number(id));
  if (!user) throw Error(`User ${id} does not exist`);
  return user;
};

const createUser = (name, email) => {
  if (!name || !email) throw Error("Missing data");
  const newUser = {
    id: id++,
    name,
    email,
  };
  users.push(newUser);
  return newUser;
};

const updateUser = (id, name, email) => {
  if (!id || !name || !email) throw Error("Missing data");
  const user = users.find((user) => user.id === Number(id));
  if (!user) throw Error("User does not exist");
  user.name = name;
  user.email = email;
  return user;
};

const deleteUser = (id)=>{
  const userDeleted = users.find((user) => user.id === Number(id));
  if (!userDeleted) throw Error("User does not exist");
  users= users.filter ((user)=> user.id !== Number(id))
  return userDeleted    
}

module.exports = {
  getUsers,
  findUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
