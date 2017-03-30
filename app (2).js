var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');


//Connection to BD

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});

//Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import Models and Controllers

var models = require('./models/tvshow')(app, mongoose);
var TVShowCtrl = require('./controllers/tvshows');

//Example Route

var router = express.Router();
router.get('/', function (req, res) {
    res.send("Hello World");
});

app.use(router);

//API Routes

var tvshows = express.Router();

tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);

//Start Server

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
})