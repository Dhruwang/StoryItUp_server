const http = require("http")
const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT =  8000
MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app)
mongoose.set('strictQuery', true);

mongoose.connection.once("open",()=>{
    console.log("Connetion is ready");
})


mongoose.connection.on("error",(err)=>{
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}...`)
    })
}

startServer()