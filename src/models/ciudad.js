const {Schema, model} = require('mongoose');



const ciudadSchema =new Schema({
    nombreCiudad:{type:String,required:true},
    division:{type:String, required:true},
    observacionCiudad:{type:String}
});

module.exports = model('ciudad',ciudadSchema);