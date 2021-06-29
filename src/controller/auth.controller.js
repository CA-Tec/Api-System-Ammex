const loginCtrl ={};
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');
const Usuario = require('../models/usuarios');

loginCtrl.loguear =async (req, res)=>{

    const buscarUser =await Usuario.findOne({email:req.body.email});

    if(!buscarUser) return res.json({message:'Usuario no encontrado'});

    const compararPass = await Usuario.comparePassword(req.body.password,buscarUser.password);

    if(!compararPass) return res.json({token:null, message:'Contraseña Invalida'});

    const token = jwt.sign({id:buscarUser._id},SECRET,{
        expiresIn:86400
    });

    res.json({token, buscarUser});
}

module.exports= loginCtrl;