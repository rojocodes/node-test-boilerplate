var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/getName', function (req, res) {
    //get some stuff using get parameters
    res.json({
        message: 'the name is:rojocodes'
    });
});


router.post('/updateName', function (req, res) {
    var body = req.body;
    //do some update stuff
    res.json({
        message: 'name updated to: ' + body.name
    });
});

app.use('/api', router);

module.exports = {
    app
};