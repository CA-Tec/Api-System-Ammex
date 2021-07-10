const {Router} = require('express');
const router =Router();

const {
    getDocumentos,
    uploadFile,
    deleteDoc
} = require('../controller/documento.controller');

const {upload} = require('../libs/multer');

router.get('/:id',getDocumentos);

router.post('/',upload,uploadFile);

router.delete('/:id',deleteDoc);


module.exports = router;