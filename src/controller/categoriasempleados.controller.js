const categoriaempleadoCtrl={};
const Catempleados = require('../models/categoriasEmpleados');

categoriaempleadoCtrl.getCategorias=async(req,res)=>{
    const categorias = await Catempleados.find().lean();
        res.json(categorias);
    

}

categoriaempleadoCtrl.createCategoria=async(req, res)=>{
const categoempleados = new Catempleados(req.body);
await categoempleados.save( function(err){
    if(err){
        console.log(err);
    }
    res.json({message:'Categoria guardada con exito'});
});
}

categoriaempleadoCtrl.getCategoria=async(req,res)=>{
    await Catempleados.findById(req.params.id,function(err,dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    })

}

categoriaempleadoCtrl.updateCategoria= async(req,res)=>{
   await Catempleados.findByIdAndUpdate(req.params.id,req.body, function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Registro Actualizado.'})
    })

}

categoriaempleadoCtrl.deleteCategoria= async(req,res)=>{
   await Catempleados.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Categoria eliminada'});
    });

}


module.exports=categoriaempleadoCtrl;