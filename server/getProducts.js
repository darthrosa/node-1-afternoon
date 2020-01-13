const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(num => num.price >= parseInt(req.query.price))
        return res.status(200).send(items);
    }
    res.status(200).send(products);
};

module.exports = getProducts;