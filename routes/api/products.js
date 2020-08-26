const express = require('express');
const router = express.Router();
const productMock = require('../../utils/mocks/products');

router.get('/', function(req, res) {
    const { query } = req.query;

    res.status(200);
    res.json({
        data: productMock,
        message: "Products listed",
    });
});

router.get('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(200);
    res.json({
        data: productMock[0],
        message: "Product retirived",
    });
});

router.post('/', function(req, res) {
    res.status(201);
    res.json({
        data: productMock[0],
        message: "Product created",
    });
});

router.put('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(200);
    res.json({
        data: productMock[0],
        message: "Product updated",
    });
});

router.delete('/', function(req, res) {
    res.status(200);
    res.json({
        data: productMock[0],
        message: "Products deleted",
    });
});

module.exports = router;