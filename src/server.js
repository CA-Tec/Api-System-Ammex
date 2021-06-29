const express = require('express');
const app = express();

app.set('port', process.env.PORT );

app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto:'+ app.get('port'));
})



module.exports=app;

