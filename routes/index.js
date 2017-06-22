var express = require('express');
var router = express.Router();
var article = require('../controllers/add'); 
var articlesh = require('../controllers/show'); 


var User = require('../auth/models/users');
//passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var login = require('../auth/controllers/users');
require('../auth/models/users');


/*GET home page. 
 router.get('/', function(req, res, next) {
  //res.render('view', { title: 'my other page', layout: 'index' });
  res.render('index');
}); */ 



/* Add Articles */
router.get('/add', article.add);

/* Show Articles */
router.get('/show', articlesh.show);

//get single article
router.get('/show/:id', articlesh.findbyid);


//delete articles
router.delete('/show/:id', articlesh.deleteme);

//edit article put request
router.put('/add/:id',articlesh.editme);

//edit article get request
router.get('/add/:id', function(req,res){
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
		res.redirect('/auth/login');
		console.log('login failed!');
	}
}




//test

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


router.post('/auth/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/auth/login'}),
  function(req, res) {
    res.redirect('/');
  });




module.exports = router;
