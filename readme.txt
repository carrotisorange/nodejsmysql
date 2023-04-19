node.js - programming language
npm - node package manager
express.js - routes - 
	-light
	-routes
	-middleware
mysql - database

npm init

npm install --save mysql express

create app.js - entry point

npm install -g nodemon

nodemon app.js

localhost:3000

create route

create a simple middleware

global
specific to a single route/middleware
	app.get('/users', auth, (req, res)=>{
	console.log("Users Page")
	res.send("Users Page")
}

function auth(req, res, next){
	if(req.query.admin === 'true){
		next()
	}else{
		res.send('No Auth')
	}
}

templating engine

refactoring codes

import express on the new js files where the routes are transferred

const express - require("express");
const router = express.Router();

instead of app, use router

import a file from another folder
const userRoute = require('./routes.user');

create different endpoints for users - CRUD
at the end of the routes file write module.exports = router


at the entry point

app.use('/user', userRoute);
