const Roles = require('../models/Roles');

const createRoles = async()=>{
    try {
        const count = await Roles.estimatedDocumentCount();

        if(count > 0){
            return;
        }

        const values = await Promise.all([
            new Roles({name:'usuario'}).save(),
            new Roles({name:'administrador'}).save(),
            new Roles({name:'invitado'}).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
    }
}

module.exports= createRoles();