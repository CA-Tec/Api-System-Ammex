const usuariosCtrl = {};
const Usuarios = require('../models/usuarios');
const Roles = require('../models/Roles');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');

usuariosCtrl.getUsuario =async(req, res) =>{
   await Usuarios.findById(req.params.id,function(err, datos){
        if(err){
            console.log(err);
        }
        res.json(datos);
    })
}

usuariosCtrl.getUsuarios =async(req, res) =>{
const usuarios = await Usuarios.find().populate("roles");
       console.log(usuarios);
        res.json(usuarios);
}

usuariosCtrl.createUsuario = async(req, res) =>{
    const {nombreUsuario, email, password, roles} = req.body;
    const usuario = new Usuarios({
        nombreUsuario,
        email,
        password: await Usuarios.encryptPassword(password)
    });

    if(roles){
        const buscarRoles = await Roles.find({name:{$in:roles}})
        usuario.roles = buscarRoles.map(roles => roles._id);
    }else{
        const roles = await Roles.findOne({name:'usuario'});
        usuario.roles=[roles._id];
    }

    const saveUsuario= await usuario.save();
    console.log(saveUsuario);

    const token = jwt.sign({id:saveUsuario._id},SECRET,{
        expiresIn:86400
    });

    console.log(token);
}

usuariosCtrl.updateUsuario =async(req, res) =>{
  await  Usuarios.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Usuario actualizado'});
    });
}

usuariosCtrl.deleteUsuario =async(req, res) =>{
  await Usuarios.findByIdAndDelete(req.params.id,function(err){
       if(err){
           console.log(err);
       }
       res.json({message:'Usuario Eliminado'});
   })
}

module.exports = usuariosCtrl;