var db = require('../models/users.js');
var bcrypt = require('bcryptjs');


module.exports.createuser = function(req,res){

	var pass = req.body.password;
	var storehash;

	//passsord hashing
	bcrypt.genSalt(10, function(err,salt){
		if (err){ 
			return console.log('error in hashing the password');
		} 
		bcrypt.hash(pass, salt, function(err,hash){
			if (err){
				return console.log('error in hashing #2');
			} else {

				//console.log('hash of the password is ' + hash);
				storehash = hash; 
				//console.log(storehash);

				db.create({

   					email: req.body.email,
   					username: req.body.username,
   					password: storehash,


						}, function(err, User){
							if (err){ 
							
								console.log('error in creating user with authentication');

							} else {

							console.log('user created with authentication');
							console.log(User);
							res.redirect('login');

									}
					}); //db.create


			} // end of else statement 
		});

}); 



};// createuser function


module.exports.loginuser = function(req,res){

	var pass = req.body.password;

	bcrypt.genSalt(10, function(err,salt){

		if(err){
			console.log('error in hashing the password');
		}

		bcrypt.hash(pass, salt, function(err,hash){

			if (err){
				console.log('error in hashing #2');
			} else {

				bcrypt.compare(pass, hash, function(err, isMatch){

				if(err){
							return console.log('error is comparing password');
						} 

				if (isMatch) {

							res.redirect('http://localhost:3000/');

							}
				}); //bcryptcompare


		} //else 

		}); //bcrypthash

	}); //bcryptgensalt


}; //loginuser function