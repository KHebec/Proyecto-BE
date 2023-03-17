const express = require('express')
const app = express()
const logger = require("morgan")
const cors = require("cors")
const axios = require("axios")
const indexRouter = require("./routes/list")
const {conect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use("/api", indexRouter)

conect()

module.exports = app
