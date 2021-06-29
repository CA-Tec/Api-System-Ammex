const {Router} = require('express');
const router = Router();

const  {
    folioProyecto
} = require('../controller/folio.controller');

router.get('/folio',folioProyecto)

module.exports = router;