const {Router} = require('express');
const router = Router();

const {
    getCatDoc,
    getCatDocs,
    createCatDoc,
    updateCatDoc,
    deleteCatDoc
} = require('../controller/catDocumento.controller');


router.get('/:id',getCatDoc);

router.get('/',getCatDocs);

router.post('/',createCatDoc);

router.put('/:id',updateCatDoc);

router.delete('/:id',deleteCatDoc);


module.exports = router;