const folioCtrl = {};
const Proyectos = require('../models/proyectos');

folioCtrl.folioProyecto= async(req,res)=>{

  const ultimo = await Proyectos.findOne({}).sort({folio:-1});
   const ultFolio = ultimo.folio;
   const folioCon = parseInt(ultFolio.slice(5,9)) + 1;
   const fecha = new Date();
   const year = (fecha.getFullYear()).toString();
   const yearShort = year.slice(2);
   const mes = fecha.getMonth() + 1;
   const contar = mes.toString().length;
   var consecutivo="";
   var mesCorrecto="";
   var tamReal = folioCon.toString().length;

   if(contar == "1"){
      mesCorrecto = "0"+mes.toString();
   }else{
      mesCorrecto = mes.toString();
   }

   if(tamReal == "1"){
      consecutivo = "000" +folioCon.toString();
   }else if(tamReal == "2"){
      consecutivo ="00"+folioCon.toString();
   }else if(tamReal == "3"){
      consecutivo ="0"+folioCon.toString();
   }else if(tamReal =="4"){
      consecutivo = folioCon.toString();
   }

   var folio = "#" +yearShort + mesCorrecto + consecutivo;

   res.json({folio});
 }

module.exports = folioCtrl;