const {Router} = require('express');
const router = Router();

const {
    getProducto,
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
} = require('../controller/productos.controller');

router.get('/:id',getProducto);

router.get('/',getProductos);

router.post('/',createProducto);

router.put('/:id',updateProducto);

router.delete('/:id',deleteProducto);

module.exports = router;