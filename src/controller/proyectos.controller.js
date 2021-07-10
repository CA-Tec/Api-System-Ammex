const proyectosCtrl = {};
const Proyectos = require('../models/proyectos');
const Division = require('../models/division');
const Ciudad = require('../models/ciudad');
const Producto = require('../models/productos');
const Empleado = require('../models/empleados');
const Usuario = require('../models/usuarios');
const Documentos = require('../models/documentos');

const moment = require('moment');

const aws = require('aws-sdk');
const { S3_ENDPOINT, BUCKET_NAME } = process.env;
const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});


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
    }).sort({folio:-1})
}

proyectosCtrl.createProyecto =async(req,res) =>{
   const proyecto =new Proyectos(req.body);
   const {fechaInicio,fechaTermino} = req.body;
   var inicio = moment(fechaInicio);
   var fin = moment(fechaTermino);
   var dif = fin.diff(inicio,'day')+1;
   var hoy = new Date();
   var today = moment(hoy);
   var result= 0;

   if(today<inicio){
      result = today.diff(inicio,'days')-1;
      console.log(today + ' '+'Es menor a'+ result);
   }

   if(today > inicio && today < fin){
      result= fin.diff(today,'days')+1;
      console.log('Faltan'+ result);
   }

   if(!result){
      console.log('Proyecto Vencido');
   }

   if(today > fin){
      result= fin.diff(today,'days');
      console.log(result);
   }
   proyecto.transcurrido= result;
   proyecto.duracion = dif;
   await proyecto.save(function(err){
      if(err){
         console.log(err);
      }
      res.json({message:'Proyecto Agregado'});
   })


}

proyectosCtrl.updateProyecto =async(req,res) =>{
   await Proyectos.findByIdAndUpdate(req.params.id,req.body,function(err){
      if(err){
         console.log(err);
      }
      res.json({message:'Proyecto Actualizado'});
    })
}

proyectosCtrl.deleteProyecto =async(req,res) =>{
   let documentos = [];
   let nuevDoc=[];
   documentos = await Documentos.find({proyecto:req.params.id});
   console.log(documentos);
  documentos.forEach(async element=>{
      var params = {
         Bucket: BUCKET_NAME,
         Key: element.nombreDoc
     };
     
     s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else     console.log(data);
     });
     
     await Documentos.findByIdAndDelete(element._id);
   });

  await Proyectos.findByIdAndDelete(req.params.id, function(err){
     if(err){
        console.log(err);
     }
     res.json({message:'Proyecto eliminado'});
  })   
}



module.exports = proyectosCtrl;