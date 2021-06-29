const {Schema,model} = require('mongoose');

const proyectosSchema =new Schema({
    folio:{type:String},
    nombreProyect:{type:String,required:true},
    contratista:{type:String,required:true},
    division:{type:String,required:true},
    ciudad:{type:String,required:true},
    producto:{type:String,required:true},
    supervisorTelmex:{type:String},
    supervisor:{type:String,required:true},
    fechaInicio:{type:Date,required:true},
    fechaTermino:{type:Date,required:true},
    duracion:{type:String,required:true},
    transcurrido:{type:Number},
    documentos:{type:String},
    costoAprox:{type:String},
    obProyect:{type:String},
    pepProyect:{type:String},
    opProyect:{type:String},
    oeiProyect:{type:String},
    oeProyect:{type:String},
    observacionProyect:{type:String},
    status:{type:String},
    etapas:{type:String},
    usuario:{type:Schema.ObjectId, ref:"usuarios"}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('proyectos',proyectosSchema);