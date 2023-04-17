const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

//connect
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql connected...');
});

const app = express();

//create schema/database
app.get('/createdb', (req, res) =>{
    let sql = `CREATE DATABASE nodemysql`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

//create table
app.get('/createuserstable', (req, res)=>{
    let sql = `CREATE TABLE users (id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), PRIMARY KEY (id))`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('table created...');
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

app.get('/storeuser/2', (req, res)=>{
    let user = {name: 'Daemon', email: 'daemon@gmail.com'};
    let sql = `INSERT INTO users SET ?`;
    let query = db.query(sql, user, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('new user is created...')
    });
});

//get all
app.get('/getusers', (req, res)=>{
    let sql = `SELECT * FROM users`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('users...');
    });
});

//get a single user
app.get('/getuser/:id', (req, res)=>{
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('user');
    });
});

//update a user


//delete a user

app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});;