const express = require('express');
const app= express();
var cors=require('cors');
//settings


app.set('port',process.env.PORT || 3000);//configuracion del puerto
app.listen(app.get('port'),() => {
    console.log('Server on!', app.get('port'));
});

//Middlewares
app.use(express.json());   //reemplaza a bodparcer para trasformas en jason
app.use(cors());

//routes
app.use(require('./routes/usuarios'));
app.use(require('./routes/datos'));

