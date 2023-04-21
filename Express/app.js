const express = require('express')
const app = express()
const port = 4004
const router = require('./router')

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

