const productoCtrl={};
const Producto = require('../models/productos');

productoCtrl.getProducto =async(req,res)=>{
    await Producto.findById(req.params.id, function(err, dato){
        if(err){
            console.log(err)
        }
        res.json(dato);
    })
}

productoCtrl.getProductos =async(req,res)=>{
    await Producto.find({},function(err,dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    });
}

productoCtrl.createProducto =async(req,res)=>{
    const producto = new Producto(req.body)
    producto.save(function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Producto Agregado'});
    });
}

productoCtrl.updateProducto =async(req,res)=>{
  await  Producto.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Producto Actualizado'});
    });
}

productoCtrl.deleteProducto = async(req,res)=>{
   await Producto.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Producto Eliminado'});
    })
}

module.exports = productoCtrl;