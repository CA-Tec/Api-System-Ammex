const {Router} = require('express');
const router=Router();

const {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getSupervisores
} = require('../controller/empleados.controller');

router.get('/',getEmpleados);

router.get('/:id',getEmpleado);

router.get('/supervisores',getSupervisores);

router.post('/',createEmpleado);

router.put('/:id',updateEmpleado);

router.delete('/:id',deleteEmpleado);



module.exports=router;