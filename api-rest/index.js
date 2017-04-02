'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.port|| 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {

    res.send(200, { products: [] })

})

app.get('api/product/:productId', (req, res) => {
    
})

app.post('/api/product', (req, res) => {

    console.log(req.body)
    res.status(404).send({message: 'El producto no existe'})

})

//ACTUALIZACIÓN PRODUCTO

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(port, function() {
    console.log(`Api Rest Corriendo en http://localhost:${port}`)
});
