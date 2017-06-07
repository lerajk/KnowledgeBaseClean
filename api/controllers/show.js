var show = require('../models/db');


//controller to view all articles 

module.exports.listarticles = function (req, res) {
res.status(200);
//res.json({"status" : "success"});

show.find({ }, function (err, docs) {
    if(err){
        throw err;
    }
    else {
        res.send(JSON.stringify(docs));
    }
}); 

};

//controller to add article 

module.exports.addarticles = function (req,res){
	show.create({
		title: req.body.title,
		author: req.body.author,
		content: req.body.content
	}, function(err,articles){
		if(err){
			//sendJsonResponse(res,400,err);
			console.log('error');
		} else {
			//sendJsonResponse(res,201,articles);
			console.log('success in inserting document');
			res.redirect('http://localhost:3000/api/show');
		}
	});
};

/*

// controller for finding single article by id
module.exports.findbyid = function (req,res){

	console.log('hello');


	show.findById(req.params.id, function(err, articles){ 
		console.log(articles);
		

	} )//findbyid ends here

}; //export function ends here

/***** 

module.exports.deletearticles = function(req,res){
	show.findOneAndRemove('title' : 'Test', function(err,articles){
		if (err) {
		 throw err;
		}
		else {
			console.log('user removed!');
		}
	});
}; */

module.exports.deletearticles = function(res,res){

//console.log('hi');

show.findByIdAndRemove('593052c30d108c0fd2f5fc78', function(err){
	if (err) throw err;
	console.log ('user deleted!');
});

};