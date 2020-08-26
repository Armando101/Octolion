const productsMocks = require('../utils/mocks/products');

class ProductsService {
    constructor() {

    }

    getProducts({ tags }) {
        return Promise.resolve(productsMocks);
    }

    getProduct({ ProductId }) {
        return Promise.resolve(productsMocks[0]);
    }

    createProduct({ product }) {
        return Promise.resolve(productsMocks[0]);
    }

    updateProduct({ ProductId, product }) {
        return Promise.resolve(productsMocks[0]);
    }

    deleteProduct({ ProductId }) {
        return Promise.resolve(productsMocks[0]);
    }

}

module.exports = ProductsService;