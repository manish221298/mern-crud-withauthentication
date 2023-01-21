const express = require("express")
const app = express()
const cors = require("cors")
const configureDB = require("./config/database")
configureDB()
const router= express.router

const routes = require("./config/routes")

const port = 3055

app.use(cors())
app.use(express.json())
app.use("/", routes)


app.listen(port, () => {
    console.log('Listening on port', port)
})

