const {Schema, model} = require('mongoose');

const categoriaSchema =new Schema({
    nombreCategoria:{type:String,required:true},
    observacionCategoria:{type:String}
});

module.exports = model('categoria',categoriaSchema);