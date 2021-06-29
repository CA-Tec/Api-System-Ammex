const empleadoCtrl={};
const Empleados = require('../models/empleados');
const CatEmpleados = require('../models/categoriasEmpleados');

empleadoCtrl.getEmpleados= async(req,res)=>{

await Empleados.find({},function(err,empleados){
        res.json(empleados);
});

};



empleadoCtrl.getEmpleado=async(req,res)=>{
     await Empleados.findById(req.params.id, function(err,dato){
            res.json(dato);
    });
};

empleadoCtrl.getSupervisores = async(req,res)=>{
   const empleados= await Empleados.find({Categoria:'Supervisor'}).lean();
        console.log(empleados);
        res.json(empleados);
    
}

empleadoCtrl.createEmpleado= async(req,res)=>{
const empleados = new Empleados(req.body);
await empleados.save(function (err){
    if(err){
        console.log(err);
    }
    res.json({message:'Empleado registrado'});
});

};

empleadoCtrl.updateEmpleado= async(req,res)=>{
   await Empleados.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Empleado Actualizado.'})
    })

};

empleadoCtrl.deleteEmpleado= async(req,res)=>{
  await  Empleados.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Empleado eliminado.'})
    });

}

module.exports=empleadoCtrl;