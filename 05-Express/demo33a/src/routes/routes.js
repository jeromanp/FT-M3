const { Router } = require("express");
const apiRouter = require("./apiRouter");

//Route esta en express
const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hola mundo" });
});

//todo lo que inicie con "/api" que vaya a apiRoute
mainRouter.use("/api", apiRouter);

module.exports = mainRouter;
