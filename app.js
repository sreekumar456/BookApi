/**
 * Created by sreek on 11/20/2016.
 */
var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function(req,res){

        var responseJson = {hello:"This is my api"};
        res.json(responseJson);
    });

app.use('/api', bookRouter);


app.get('/', function(req,res){

    res.send('Welcome to my API!');

});
/*
app.listen(port, function(){

    console.log('Running on port:' + port);
});*/

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

