const catDocCtrl ={};

const CatDoc = require('../models/catDocumento');

catDocCtrl.getCatDoc = async(req,res)=>{
    await CatDoc.findById(req.params.id,function(err,dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    });
}

catDocCtrl.getCatDocs = async(req,res)=>{
    await CatDoc.find({}, function(err,dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    })
}

catDocCtrl.createCatDoc = async(req,res)=>{
    const catDoc =new CatDoc(req.body);
   await catDoc.save(function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Documento agregado'});
    });
}

catDocCtrl.updateCatDoc = async(req,res)=>{
   await CatDoc.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Documento Actualizado'});
    })
}

catDocCtrl.deleteCatDoc = async(req,res)=>{
    await CatDoc.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Documento eliminado'});
    })
}


module.exports = catDocCtrl;