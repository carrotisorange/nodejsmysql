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

