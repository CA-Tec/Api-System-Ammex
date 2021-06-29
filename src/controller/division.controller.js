const divisionCtrl = {};

const Division = require('../models/division');

divisionCtrl.getDivision = async(req, res)=>{
  await  Division.findById(req.params.id, function(err, dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    });

}

divisionCtrl.getDivisiones = async(req, res)=>{
    await Division.find({},function(err,dato){
        if(err){
            console.log(err);
        }
        res.json(dato);
    });
}

divisionCtrl.createDivision = async(req, res)=>{
    const division = new Division(req.body);
await  division.save(function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Division Agregada..'});
    })
}

divisionCtrl.updateDivision = async(req, res)=>{
   await Division.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Division Actualizada'});
    })
    
}

divisionCtrl.deleteDivision = async(req, res)=>{
    await Division.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err);
        }
        res.json({message:'Division Eliminada..'})
    })
}


module.exports = divisionCtrl;