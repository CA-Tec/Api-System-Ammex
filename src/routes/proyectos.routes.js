const {Router} = require('express');
const router = Router();

const {
    getProyecto,
    getProyectos,
    createProyecto,

} = require('../controller/proyectos.controller');

router.get('/:id',getProyecto);

router.get('/',getProyectos);

router.post('/',createProyecto);



module.exports = router;
