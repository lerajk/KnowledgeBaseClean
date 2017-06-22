
//authentication
var express = require('express');
var router = express.Router();
var userdata = require('../controllers/users');
var User = require('../models/users');

//require to lock routes from index.js 
require('../../routes/index.js');

//passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



//routing 
router.get('/register', function(req,res){
	res.render('register');

}); 


router.get ('/login', function(req,res){
  res.render('login');
}); 


//add new user from registration form 
router.post('/register', userdata.createuser);


//login register form 
//router.post('/login', userdata.loginuser);



module.exports = router;