const supervisorCtrl = {};
const Empleado = require('../models/empleados');

supervisorCtrl.getSupervisor = async(req, res)=>{
   const emplea = await Empleado.find({Categoria:'Supervisor'});
   console.log(emplea);
   res.json(emplea);

}

module.exports = supervisorCtrl;