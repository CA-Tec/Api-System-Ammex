const {Router} = require('express');
const router =Router();

const {
    getCiudad,
    getCiudades,
    createCiudad,
    updateCiudad,
    deleteCiudad,
    getCiudadParams
} = require('../controller/ciudad.controller');

router.get('/:id',getCiudad);

router.get('/',getCiudades);

router.post('/',createCiudad);

router.put('/:id',updateCiudad);

router.delete('/:id',deleteCiudad);

router.get('/',getCiudadParams);

module.exports = router;