const {Router} = require('express');
const router = Router();

const {
    getProyecto,
    getProyectos,
    createProyecto,
    deleteProyecto,
    updateProyecto

} = require('../controller/proyectos.controller');

router.get('/:id',getProyecto);

router.get('/',getProyectos);

router.post('/',createProyecto);

router.put('/:id',updateProyecto);

router.delete('/:id',deleteProyecto);




module.exports = router;
