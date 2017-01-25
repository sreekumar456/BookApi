    /**
     * Created by sreek on 11/20/2016.
     */
    var express = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser');


    var db = mongoose.connect('mongodb://localhost/bookAPI');

    var Book = require('./models/bookModel');

    var app = express();

    var port = process.env.PORT || 3000;


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

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    var bookRouter=  require('./Routes/bookRoutes')(Book);

    app.use('/api/Books', bookRouter);
    //app.use('/api/Author', authorRouter);