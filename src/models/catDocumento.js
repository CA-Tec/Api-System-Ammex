const {Schema, model} = require('mongoose');


const  catDocSchema =new Schema({
    nombreDoc:{type:String, required:true},
    aliasDoc:{type:String,required:true},
    observacionDoc:{type:String}
});

module.exports= model('catDocumento',catDocSchema);