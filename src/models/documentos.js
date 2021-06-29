const {Schema,model} = require('mongoose');


const documentosSchema =new Schema({
    urlDoc:{type:String,required:true},
    nombreDoc:{type:String,required:true},
    catDocumento:{type:String,required:true},
    proyecto:{type:String, required:true},
    alias:{type:String,required:true}
},
{
    timestamps:true,
    versionKey:false
});     

module.exports = model('documentos',documentosSchema);