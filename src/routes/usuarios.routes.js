const {Router} = require('express');
const router = Router();

const {
    getUsuario,
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
} = require('../controller/usuarios.controller');


router.get('/:id',getUsuario);

router.get('/',getUsuarios);

router.post('/',createUsuario);

router.put('/:id',updateUsuario);

router.delete('/:id',deleteUsuario);

module.exports=router;