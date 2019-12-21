const express = require('express');
const router = express.Router();

const mysqlConnection=require('../database')//traemos la conexion con la db
//traer ususarios
router.post('/usuarios',(req,res) => {
    
   const {email,password}=req.body;
    const query=`select id,nombre,email,password from usuario where email=? and password=?`;
    mysqlConnection.query(query,[email,password],(err,rows,fields) =>{
        if(!err){
            console.log(req);
            res.json(rows);//entrega cada fila de la consulta
            console.log("Usuarios retornado!");
        }else{
            console.log(err);
        }
    });
});
//registrar usuarios
router.post('/register',(req,res) => {
    const {nombre ,email, password}=req.body;
    const query=`insert into usuario(nombre,email,password) value(?,?,?)`;
    mysqlConnection.query(query,[nombre,email,password],(err,rows,fields) =>{
    if(!err){
        res.json("Usuario Resgistrado!");
    }else{
        console.log(err);
    }
    });
});


module.exports=router;//para exportar las rutas