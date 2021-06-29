const {Router} = require('express');
const router = Router();

const {
    getDivision,
    getDivisiones,
    createDivision,
    updateDivision,
    deleteDivision
} = require('../controller/division.controller');

router.get('/:id',getDivision);

router.get('/',getDivisiones);

router.post('/',createDivision);

router.put('/:id',updateDivision);

router.delete('/:id',deleteDivision);

module.exports = router;