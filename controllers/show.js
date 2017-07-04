
var data = require('../models/db');

module.exports.show = function(req,res){
	res.render('show');
};


// pure API JSON data 
module.exports.listarticles = function (req, res) {
res.status(200);
data.find({ }, function (err, docs) {
    if(err){
        throw err;
    }
    else {
        res.send(JSON.stringify(docs));
    }
}); 

};


// add a blog 
module.exports.addarticles = function (req,res){
    data.create({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category
    }, function(err,articles){
        if(err){
 
            console.log('error');
        } else {
            //sendJsonResponse(res,201,articles);
            console.log('success in inserting new article ');
            res.redirect('https://kwldgebase.herokuapp.com/show');
            

        }
    });
};

//find a blog by ID 
module.exports.findbyid = function(req,res){
    
        data.findById(req.params.id, function(err, articles){ 
        res.send(articles);
     

    } /*inside function of findbyid */ )//findbyid ends here
};


//deleting a blog by ID
module.exports.deleteme = function(req,res){

    data.findByIdAndRemove(req.params.id, function(err,articles){

    if (err) throw err;
    console.log ('user deleted with the following ID!');
    console.log(req.params.id);

    })   

};


//updating the blog by ID
module.exports.editme = function(req,res){

        let edit = {};
      
        edit.author = req.body.test;
        edit.title = req.body.title_edit;
        edit.content = req.body.content_edit;
        edit.category = req.body.category_edit;

        console.log('the edited article was written by:  ' + edit.author);

        let query = {_id:req.params.id};

        data.update(query, edit, function(err){

            if(err){ 
                console.log(err);
                return;
            } else {
                console.log('the blog was updated!');
          
            }

        }); // data update 

    
}






