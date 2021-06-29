const {Router} = require('express');
const router = Router();

const {
    getTotal,
    getVencidos,
    getxVencer
} = require('../controller/consultasProyect.controller');

router.get('/totales',getTotal);

router.get('/vencidos',getVencidos);

router.get('/vencer',getxVencer);

module.exports = router;