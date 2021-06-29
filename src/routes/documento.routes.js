const {Router} = require('express');
const router =Router();

const {
    getDocumentos,
    uploadFile
} = require('../controller/documento.controller');

const {upload} = require('../libs/multer');

router.get('/:id',getDocumentos);

router.post('/',upload,uploadFile);


module.exports = router;