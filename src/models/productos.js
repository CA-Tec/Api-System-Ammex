const {Schema, model} = require('mongoose');


 const productoSchema = new Schema({
    nombreProducto:{type:String,required:true},
    observacionProducto:{type:String}    
});

module.exports = model('producto',productoSchema);