const documentoCtrl ={};
const aws = require('aws-sdk');
const { S3_ENDPOINT, BUCKET_NAME } = process.env;
const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});

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
    await Proyectos.findByIdAndUpdate(req.body.proyecto,{etapas:'Documentos',$addToSet:{documentos:consulta.aliasDoc}});
    res.json({message:"Documento Agregado"});
}


documentoCtrl.getDocumentos=async(req, res)=>{
    const documentos = await Documento.find({proyecto:req.params.id});
   
        res.json(documentos);    

}


documentoCtrl.deleteDoc=async(req, res)=>{
 const datos= await Documento.findById(req.params.id);
 console.log(datos);
    
var params = {
    Bucket: BUCKET_NAME,
    Key: datos.nombreDoc
};

s3.deleteObject(params, function(err, data) {
   if (err) console.log(err, err.stack);
   else     console.log(data);
});

await Documento.findByIdAndDelete(req.params.id);

res.json({message:'Documento eliminado'});
}



module.exports = documentoCtrl;