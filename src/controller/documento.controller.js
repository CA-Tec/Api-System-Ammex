const documentoCtrl ={};

const Documento = require('../models/documentos');
const CatDocumento = require('../models/catDocumento');
const Proyectos =require('../models/proyectos');

documentoCtrl.uploadFile = async (req,res)=>{
    console.log(req.file.location,req.file.originalname);
    console.log(req.body.catDocumento);
    const consulta = await CatDocumento.findOne({nombreDoc:req.body.catDocumento});
    const newDocumento = new Documento();
    console.log(consulta);
    newDocumento.nombreDoc= req.file.originalname;
    newDocumento.proyecto = req.body.proyecto;
    newDocumento.catDocumento = consulta.nombreDoc;
    newDocumento.urlDoc = req.file.location;
    newDocumento.alias = consulta.aliasDoc;
    console.log(newDocumento);
    await newDocumento.save();
    await Proyectos.findByIdAndUpdate(req.body.proyecto,{etapas:'Documentos',documentos:consulta.aliasDoc});
    res.json({message:"Documento Agregado"});
}


documentoCtrl.getDocumentos=async(req, res)=>{
    const documentos = await Documento.find({proyecto:req.params.id});
   
        res.json(documentos);    

}


module.exports = documentoCtrl;