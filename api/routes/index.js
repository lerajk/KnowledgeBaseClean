var express = require('express');
var router = express.Router();
var show = require('../controllers/show');

//get all the articles 
router.get('/show', show.listarticles);

//add an article 
router.post('/show', show.addarticles);


//router.delete('/show', show.deletearticles);



module.exports = router;