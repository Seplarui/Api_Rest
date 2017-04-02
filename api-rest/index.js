'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.port|| 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!` })
})

app.listen(port, function() {
    console.log(`Api Rest Corriendo en http://localhost:${port}`)
});
