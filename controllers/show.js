//data from database file include
var data = require('../api/models/db');


// controller for show
// retrives data from API and controls the data tha inputs to the view 
var request = require('request');

module.exports.show = function(req,res){
	//res.render('index', {title: 'Im all the articles'});
	res.render('show');
	  //res.send('hi');
};

request('http://localhost:3000/api/show', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
    console.log('success!')

    // Parse the JSON URL into a Javascript Object
    var obj = JSON.parse(body);
    console.log(obj);
	}
});


module.exports.findbyid = function(req,res){
    
      //res.send('hi');
        data.findById(req.params.id, function(err, articles){ 
        //console.log(articles);
        res.send(articles);

        //res.render('single');
        

    } /*inside function of findbyid */ )//findbyid ends here
};

module.exports.deleteme = function(req,res){

    data.findByIdAndRemove(req.params.id, function(err,articles){

    if (err) throw err;
    console.log ('user deleted with the following ID!');
    console.log(req.params.id);

    })
    

};






