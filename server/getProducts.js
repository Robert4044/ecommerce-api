const products = require('../products.json');

module.exports = {
    getProducts: (req, res) => {
        const { price } = req.query;

        if (!price) {
            res.status(200).send(products);
        } else {
            const filteredProducts = products.filter(
                element => element.price >= +price
            );
            res.status(200).send(filteredProducts);
        }
    },
    getProduct: (req, res) => {
        const { id } = req.params;
        console.log(id);

        const product = products.find(element => {
            return element.id === +id;
        });

        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send('Item not in the list');
        }
    },
};
