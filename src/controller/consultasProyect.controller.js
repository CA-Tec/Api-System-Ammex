const consulProyectCtrl={};

const Proyecto = require('../models/proyectos');

consulProyectCtrl.getTotal =async(req,res)=>{
    const totales = await Proyecto.find().count();

    res.json(totales);
}

consulProyectCtrl.getTerminados =async(req,res)=>{
    const terminados = await Proyecto.find({status:'TERMINADO'}).count();

    res.json(terminados);
}

consulProyectCtrl.getVencidos=async(req,res)=>{
    const vencidos = await Proyecto.find({transcurrido:{$lt:0}});
    res.json(vencidos);
}

consulProyectCtrl.getxVencer = async(req, res)=>{
    const vencer = await Proyecto.find({transcurrido:{$lte : 3, $gte: 0}});

    res.json(vencer);
}

module.exports=consulProyectCtrl;