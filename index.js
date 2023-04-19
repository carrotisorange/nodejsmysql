//import packages
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const userRoute = require('./routes/users');
// const blogRoute = require('./routes/blogs');

app.use('/user', userRoute);
// app.use('/blog', blogRoute);

//establish the connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'nodemysql'
});

//connect to the db
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql is connected');
});



//set the templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
//create a schema/db
app.get('/createdb', (req, res) => {
    let sql = `CREATE DATABASE IF NOT EXISTS nodemysql`;
    db.query(sql, (err, result)=>{
        if(err)
            throw err;
        console.log(result);
        res.send('Database has been created!');
    });
});

//create a table
app.get('/createtable', (req, res) => {
    let sql = `CREATE TABLE users (id INT AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), PRIMARY KEY (id))`;
    db.query(sql, (err, result)=>{
        if(err)
            throw err;
        console.log(result);
        res.send('Table has been created!');
    });
});

//insert row in users table
app.get('/storeuser/1', (req, res)=>{
    let user = {name: 'Juan', email: 'juan@gmail.com'};
    let sql = `INSERT INTO users SET ?`;
    let query = db.query(sql, user, (err, result)=>{
        if(err) throw err;
            console.log(result);
        res.send('new user is created...')
    });
});

//insert row in users table
app.post('/storeuser/2', (req, res)=>{
    let user = {name: 'Maria', email: 'maria@gmail.com'};
    let sql = `INSERT INTO users SET ?`;
    let query = db.query(sql, user, (err, result)=>{
        if(err) throw err;
            console.log(result);
        res.send('new user is created...')
    });
});

//fetch all the users
app.get('/users', (req, res) => {
    let sql = `SELECT * FROM users`;
    db.query(sql, (err, result)=>{
        if(err)
            throw err;
        console.log(result);
        res.send(result);
    });
});

//global middleware
// app.use(auth);

//fetch a user
// app.get('/user/:id', auth, (req, res) => {
//     let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
//     db.query(sql, (err, result)=>{
//         if(err)
//             throw err;
//         console.log(result);
//         // res.send(result);
//     });
// });



//update user
app.get('/updateuser/:id', auth, (req,res) => {
    let sql = `UPDATE users SET name = 'Christiane' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result) =>{
        if(err)
            throw err;
        console.log(result);
        res.send(result);
    });
})

//delete user
app.get('/deleteuser/:id', auth,(req,res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    db.query(sql, (err,result) =>{
        if(err)
            throw err;
        console.log(result);
        res.send(result);
    });
})

// req -> middleware -> response

// authentication = username, password - authenticated
// authenticated + privileged = admin = delete, update, insert = user = select

// middleware 
//     1. global
//     2. specific middleware

function auth(req, res, next){
    if(req.query.role === 'true'){
        console.log('You are an admin');
        next()
    }else{
        console.log('You are not an admin');
    }
}

// req => middleware =>  middleware =>  middleware => res

//routes for users table 
//create


app.listen(3000, function(){
    console.log('Server is running at port ' + 3000);
});







