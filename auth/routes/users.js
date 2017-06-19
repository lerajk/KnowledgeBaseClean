
//authentication
var express = require('express');
var router = express.Router();
var use = require('../controllers/users');


router.get('/register', function(req,res){
	res.render('register');
  //res.send('hi');
}); 

/*
//post data of user
router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password = req.body.password2;

  //validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Password dont match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
  	res.render('register', {
  		errors:errors
  	});
  } else {

  	var newUser = new User({
			
			email:email,
			username: username,
			password: password
		});

  	User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

  	//req.flash('success_msg', 'You are registered and can now login');

  	res.redirect('/');


  }

   
}); */

module.exports = router;