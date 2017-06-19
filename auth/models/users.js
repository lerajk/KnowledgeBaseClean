//database model for users for authentication

var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

/*var dbURI = 'mongodb://localhost/auth';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
 */

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	
});

var User = module.exports = mongoose.model('User', UserSchema);
