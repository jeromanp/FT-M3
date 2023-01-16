//la unica responsabilidad de este archivo sea escuchar
const server = require("./src/app");

server.listen(3001, () => {
  console.log("listening on port 3001");
});
