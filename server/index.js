const express = require('express');
const getProducts = require('./getProducts');

const app = express();

const port = 8080;

// app.get('/api/products', (req, res) => {
//     res.status(200).send(products);
// });

app.get('/api/products', getProducts.getProducts);

app.get('/api/products/:id', getProducts.getProduct);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
