const ciudadCtrl ={};

const Ciudad = require('../models/ciudad');
const Division = require('../models/division');

ciudadCtrl.getCiudad =async(req,res) =>{
    await Ciudad.findById(req.params.id,function(err, dato){
            Division.populate(dato,{path:'division'},function(err,dato){
                res.json(dato);
            })
       
    });
}
ciudadCtrl.getCiudadParams=async(req,res)=>{
    var filters = req.query.filters?req.query.filters:'{}';
    console.log(filters);
    filters= JSON.parse(filters);

   const ciudad = await Ciudad.find(filters).lean();
 
        res.json(ciudad);
  
    
}

ciudadCtrl.getCiudades = async(req,res) =>{
    var filters = req.query.filters?req.query.filters:'{}';
    console.log(filters);
    filters= JSON.parse(filters);
    await Ciudad.find(filters,function(err, dato){
                console.log(dato);
                res.json(dato);

    });
}

ciudadCtrl.createCiudad =async(req,res) =>{
    const ciudad = new Ciudad(req.body);
    await ciudad.save(function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Ciudad Agregada'});
    })
    
}

ciudadCtrl.updateCiudad =(req,res) =>{
    Ciudad.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Ciudad Actualiada..'});
    })
}

ciudadCtrl.deleteCiudad =(req,res) =>{
    Ciudad.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Ciudad Eliminada...'});
    })
}


module.exports = ciudadCtrl;