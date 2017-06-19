var express = require('express');
var router = express.Router();
var article = require('../controllers/add'); 
var articlesh = require('../controllers/show'); 



/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('view', { title: 'my other page', layout: 'index' });
  res.render('index');
});

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
	//res.send('hi');
})

module.exports = router;
