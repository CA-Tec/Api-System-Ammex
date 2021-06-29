const {Router} = require('express');
const router = Router();

const {
    getRoles
} = require('../controller/roles.controller');


router.get('/',getRoles);

module.exports = router;