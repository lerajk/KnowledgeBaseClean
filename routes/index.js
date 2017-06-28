var express = require('express');
var router = express.Router();

//controllers for adding blog
var articlesh = require('../controllers/show'); 
//model for creating blogs
require('../models/db');

// controller for creating user
var userdata = require('../controllers/users');
//models for user creation
var User = require('../models/users');
//passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;





/* Get the Add Article Page */
router.get('/add',ensureAuthenticated, function(req,res){
  res.render('add');
});

//add the blog with post request 
router.post('/add', articlesh.addarticles);

//the api JSON data raw
router.get('/showapi', ensureAuthenticated, articlesh.listarticles);


/* Show Articles */
router.get('/show',ensureAuthenticated, articlesh.show);

//get single article
router.get('/show/:id', ensureAuthenticated, articlesh.findbyid);


//delete articles
router.delete('/show/:id', ensureAuthenticated, articlesh.deleteme);

//edit article put request
router.put('/add/:id', ensureAuthenticated, articlesh.editme);

//edit article get request
router.get('/add/:id', ensureAuthenticated, function(req,res){
	res.render('edit');
	
});



// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		//res.send('authentication success');
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
		console.log('login failed!');
	}
}




//passport local strategy 

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	console.log('The logged in user is ' + user);
   	if(!user){

   		//console.log('the user is not correct');

   		return done(null, false);
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false);
   		}
   	}); //comparepassword 

   });

  }));



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});


//authentication paths

//get the register page
router.get('/register', function(req,res){
  res.render('register');

}); 

//add new user from registration form 
router.post('/register', userdata.createuser);

//get the login page 
router.get ('/login', function(req,res){
  res.render('login');
}); 



router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login'}),
  function(req, res) {
    res.redirect('/');
  });


router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/login');
});




module.exports = router;
