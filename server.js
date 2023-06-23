const express=require('express');
const app=express();
const mysql=require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'ekansh',
    password: 'ekansh@329',
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
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const sql='select * from home_view';
    connection.query(sql,(err,result)=>{
        if(err){
            return;
        }
        res.render('index',{data:result});
    })
})

app.get('/profile/:sr_no',(req,res)=>{
    const sql=`select * from batch where sr_no=${req.params.sr_no}`;
    connection.query(sql,(err,result)=>{
        if(err){
            return;
        }
        res.render('profile',{data:result});
    });
})

app.get('/add_student',(req,res)=>{
    res.render('add');
})

app.post('/add_student', (req, res) => {
    const rollNo = req.body.roll_no;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const age = req.body.age;
    const email = req.body.email;
    const phoneNo = req.body.phone_no;
    const bloodGroup = req.body.blood_grp;
    const fatherName = req.body.father_name;
    const motherName = req.body.mother_name;
  
    const sql = `INSERT INTO batch (roll_no, first_name, last_name, age, email, phone_no, blood_grp, father_name, mother_name)
                 VALUES (${rollNo}, '${firstName}', '${lastName}', ${age}, '${email}', '${phoneNo}', '${bloodGroup}', '${fatherName}', '${motherName}')`;
  
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.redirect('/');
    });
  });
  

app.listen(3000,()=>{
    console.log('server started...');
})