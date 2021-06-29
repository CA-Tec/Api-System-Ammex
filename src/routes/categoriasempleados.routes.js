const {Router} = require('express');
const router=Router();

const {
    getCategorias,
    getCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
} = require('../controller/categoriasempleados.controller');

router.get('/',getCategorias);

router.get('/:id',getCategoria);

router.post('/',createCategoria);

router.put('/:id',updateCategoria);

router.delete('/:id',deleteCategoria);


module.exports = router;