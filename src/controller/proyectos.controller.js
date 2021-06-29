const proyectosCtrl = {};
const Proyectos = require('../models/proyectos');
const Division = require('../models/division');
const Ciudad = require('../models/ciudad');
const Producto = require('../models/productos');
const Empleado = require('../models/empleados');
const Usuario = require('../models/usuarios');


proyectosCtrl.getProyecto = async(req,res) =>{
  await Proyectos.findById(req.params.id, function(err,proyecto){
     if(err){
        console.log(err);
     }
     res.json(proyecto);
  });
}

proyectosCtrl.getProyectos =async(req,res) =>{
    await Proyectos.find({},function(err,proyectos){
       if(err){
         console.log(err);
       }
       res.json(proyectos);
    })
}

proyectosCtrl.createProyecto =async(req,res) =>{
   const proyecto =new Proyectos(req.body);
 await  proyecto.save(function(err,datos){
      if(err){
         console.log(err);
      }
      res.json(datos);
   }) 
}

proyectosCtrl.updateProyecto =(req,res) =>{
    
}

proyectosCtrl.deleteProyecto =(req,res) =>{
    
}




module.exports = proyectosCtrl;