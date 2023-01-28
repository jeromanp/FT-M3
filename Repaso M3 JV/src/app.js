//donde se crea el server

const express = require("express")
const morgan = require("morgan")
const usersRouter = require("./routes/usersRouter")

const app = express()

//MIDDLEWARES
app.use(morgan("dev"))
//los bodys que se envian de una request del insomnia se transforme a un objeto de js
app.use(express.json())

app.use("/users",usersRouter)
//app.use("/posts",postsRouter)




//POST
    



module.exports= app