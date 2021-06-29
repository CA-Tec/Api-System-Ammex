const rolesCtrl= {};

const Roles = require('../models/Roles');


rolesCtrl.getRoles = async(req, res)=>{
   await Roles.find({},function(err,roles){
        if(err){
            console.log(err);
        }
        res.json(roles);
    });
}

module.exports = rolesCtrl;