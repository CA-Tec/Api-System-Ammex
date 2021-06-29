const mongoose = require('mongoose');
const {AMMEX_APP_MONGODB_HOST,AMMEX_APP_MONGODB_DATABASE}  = process.env;

mongoose.connect("mongodb://"+AMMEX_APP_MONGODB_HOST+"/"+AMMEX_APP_MONGODB_DATABASE,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(db => console.log('Base de datos Conectada'))
    .catch(err => console.error(err));