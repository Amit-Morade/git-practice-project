const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const app = express();
const pathToPublic = path.join(__dirname, '../public')

app.use(express.static(pathToPublic))

app.listen(port, () => {
    console.log('server is started')
})