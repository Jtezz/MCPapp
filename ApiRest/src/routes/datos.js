const express = require('express');
const router = express.Router();

const mysqlConnection=require('../database')//traemos la conexion con la db
//Traer datos del dipostivos 
router.get('/datos/:id',(req,res) =>{ 
    const {id}=req.params;
    const query=`select * from datos where dispositivo=?`;
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        console.log('info!');
        res.json(rows);
    }else{
        console.log("Error en dispostivios!!!!!!!");
        console.log(err);
    }
    });
});

//retorna los dispositvos del id del usuario
router.get('/dispositivos/:id',(req,res) =>{ 
    const {id}=req.params;
    const query=`select * from dispositivos where usuario=?`;
    mysqlConnection.query(query,[id],(err,rows,fields) =>{
    if(!err){
        console.log('dipositivos retornados con exito');
        res.json(rows);
    }else{
        console.log("Error en dispostivios!!!!!!!");
        console.log(err);
    }
    });
});


module.exports=router;//para exportar las rutas