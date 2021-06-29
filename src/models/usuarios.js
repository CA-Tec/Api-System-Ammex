const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema =new Schema({
    nombreUsuario:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    roles:[{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]
});

usuarioSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

usuarioSchema.statics.comparePassword = async (password,userPassword)=>{
    return await bcrypt.compare(password,userPassword)
}

module.exports = model('usuarios',usuarioSchema);