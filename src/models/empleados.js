const {Schema, model} = require('mongoose');

const empleadosSchema = new Schema({
    nombreEmpleado:{type:String, required:true},
    apellidosEmpleado:{type:String,required:true},
    fNacEmpleado:{type:Date},
    direccionEmpleado:{type:String},
    CURPEmpleado:{type:String},
    NSSEmpleado:{type:Number},
    Categoria:{type:String,required:true},
    estudiosEmpleado:{type:String},
    fechaIngreso:{type:Date}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model("Empleados",empleadosSchema);