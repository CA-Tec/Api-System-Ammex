const { Schema, model} = require('mongoose');


const divisionSchema = new Schema({
    nombreDivision:{type:String,required:true},
    observacionDivision:{type:String}
});


module.exports = model('division',divisionSchema);