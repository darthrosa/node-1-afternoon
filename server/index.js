const express = require ('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

// app.use(express.json())

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);

app.listen(6969, () => console.log('Server running on 6969'));
