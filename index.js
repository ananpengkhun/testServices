var app = require('express')();
var bodyParser = require('body-parser');
var db = require('./db/db')

var port = process.env.PORT || 8888;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
var data = [
    {
        name: "menza",
        lastname: "menza"
    },{
        name: "menza",
        lastname: "menza"
    },{
        name: "menza",
        lastname: "menza"
    },{
        name: "menza",
        lastname: "menza"
    },
]

app.get('/data', function (req, res) {
    res.send(db.showAll())
});

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});