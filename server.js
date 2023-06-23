const express=require('express');
const app=express();
const mysql=require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'hostname',
    password: 'password',
    database: 'student'
});

connection.connect((err)=>{
    if(err){
        console.error('error connecting to sql',err);
        return;
    }
    console.log('connected');
})

app.set("view engine","ejs");


app.get('/',(req,res)=>{
    const sql='select * from batch';
    connection.query(sql,(err,result)=>{
        if(err){
            console.error('error executing the query',err);
            return;
        }
        res.render('index',{data:result});
    })
})

app.get('/profile/:sr_no',(req,res)=>{
    const sql=`select * from batch where sr_no=${req.params.sr_no}`;
    connection.query(sql,(err,result)=>{
        if(err){
            console.error('error executing the query',err);
            return;
        }
        res.render('profile',{data:result});
    });
})

app.listen(3000,()=>{
    console.log('server started...');
})