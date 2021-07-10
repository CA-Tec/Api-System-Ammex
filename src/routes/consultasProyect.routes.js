const {Router} = require('express');
const router = Router();

const {
    getTotal,
    getVencidos,
    getxVencer,
    getTerminados
} = require('../controller/consultasProyect.controller');

router.get('/totales',getTotal);

router.get('/vencidos',getVencidos);

router.get('/vencer',getxVencer);

router.get('/terminados',getTerminados);

module.exports = router;