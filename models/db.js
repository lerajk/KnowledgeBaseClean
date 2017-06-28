var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/crud';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});


//create schema for mongoose
var ArticleSchema = mongoose.Schema({
	title: {
		type: String,
		index:true,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}
});

var articles  = mongoose.model('Articles', ArticleSchema);

module.exports = articles; 


//config variable for heroku: saleskb
//mongodb://heroku_xj9150l1:pkbk26uiqi2a3m9tbga0a8ngto@ds141082.mlab.com:41082/heroku_xj9150l1


mongodb://lee:lee@ds135552.mlab.com:35552/kb