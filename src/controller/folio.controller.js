const folioCtrl = {};
const Proyectos = require('../models/proyectos');

folioCtrl.folioProyecto= async(req,res)=>{
    const count = await Proyectos.countDocuments();
    const tam = count +1;
    const fecha = new Date();
    const year = (fecha.getFullYear()).toString();
    const yearShort = year.slice(2);
    const mes = fecha.getMonth() + 1;
    const contar = mes.toString().length;
    var tamReal = tam.toString().length;
    var consecutivo="";
    var mesCorrecto="";
    if(contar == "1"){
       mesCorrecto = "0"+mes.toString();
    }else{
       mesCorrecto = mes.toString();
    }
 
    if(tamReal == "1"){
       consecutivo = "000" +tam.toString();
    }else if(tamReal == "2"){
       consecutivo ="00"+tam.toString();
    }else if(tamReal == "3"){
       consecutivo ="0"+tam.toString();
    }else if(tamReal =="4"){
       consecutivo = tam.toString();
    }
 
    var folio = "#" +yearShort + mesCorrecto + consecutivo;
     res.json({folio});
 }

module.exports = folioCtrl;