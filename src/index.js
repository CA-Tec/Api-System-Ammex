require("dotenv").config();

const express = require('express');
const morgan = require('morgan');
const app = require('./server');
const cors = require('cors');


require('./libs/inicial');

require('./db');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Rutas

app.use('/empleados',require('./routes/empleados.routes'));
app.use('/cat-empleados',require('./routes/categoriasempleados.routes'));
app.use('/division',require('./routes/division.routes'));
app.use('/ciudad',require('./routes/ciudad.routes'));
app.use('/cat-documento',require('./routes/catDocumento.routes'));
app.use('/productos',require('./routes/productos.routes'));
app.use('/usuarios',require('./routes/usuarios.routes'));
app.use('/supervisores',require('./routes/supervisores.routes'));
app.use('/proyectos',require('./routes/proyectos.routes'));
app.use('/roles',require('./routes/roles.routes'));
app.use('/auth',require('./routes/auth.routes'));
app.use(require('./routes/consultasProyect.routes'));
app.use(require('./routes/folio.routes'));
app.use('/documento',require('./routes/documento.routes'));
