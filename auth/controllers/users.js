var db = require('../models/users.js');

var bcrypt = require('bcryptjs');




module.exports.createuser = function(req,res){

db.create({

   email: req.body.email,
   username: req.body.username,
   password: req.body.password,
   password:  req.body.password2,

}, function(err, User){
	if (err){ 
		console.log('error in creating user with authentication');
	} else {
		console.log('user created with authentication');
		console.log(User);
	}
}) //db.create


};// createuser function


/*
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
} */