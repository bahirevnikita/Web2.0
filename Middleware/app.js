const express = require('express')
const app = express()
const port = 4003
const router = require('./router')
const morgan = require("morgan")
const helmet = require("helmet")

app.use(morgan("dev"))
app.use(helmet())

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

