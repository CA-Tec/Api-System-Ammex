const {Router} = require('express');
const router =Router();

const {
    getSupervisor
} = require('../controller/supervisores.controller');

router.get('/',getSupervisor);

module.exports = router;