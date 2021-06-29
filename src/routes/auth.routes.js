const {Router} = require('express');
const router = Router();

const {
    loguear
} = require('../controller/auth.controller');

router.post('/',loguear);

module.exports = router;