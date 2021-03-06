const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');
const productsMocks = require('../../utils/mocks/products');

const productsService = new ProductsService();

router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
        const products = await productsService.getProducts({ tags });

        res.status(200);
        res.json({
            data: products,
            message: "Products listed",
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:productId', async function(req, res, next) {
    const { productId } = req.params;

    try {
        const products = await productsService.getProduct({ productId });

        res.status(200);
        res.json({
            data: products,
            message: "Product retirived",
        });
    } catch (error) {
        next(error);
    }
});

router.post('/', async function(req, res, next) {

    const { body: product } = req; // Obtenemos el producto que viene el el body

    try {
        const productCreated = productService.createProduct({ product });

        res.status(201);
        res.json({
            data: productCreated,
            message: "Product created",
        });
    } catch (error) {
        next(error);
    }
});

router.put('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;

    try {
        const updateProduct = await productsService.updateProduct({ productId, product });

        res.status(200);
        res.json({
            data: updateProduct,
            message: "Product updated",
        });
    } catch (error) {
        next(error);
    }
});

router.delete('/:productId', async function(req, res, next) {
    const { productId } = req.params;

    try {
        const product = await productsService.deleteProduct({ productId });

        res.status(200);
        res.json({
            data: product,
            message: "Products deleted",
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;