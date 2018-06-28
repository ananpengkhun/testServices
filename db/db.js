const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'user';

var dataAll;

MongoClient.connect(url, function (err, res) {
    console.log("connect success");
    const db = res.db(dbName)
    getAll(db, function () {
        res.close()
    })

})

function getAll(db, callback) {
    const collection = db.collection('user')
    var data = collection.find({}).toArray(function (err, docs) {
        dataAll = docs
    })

}

exports.showAll = function(){
    return dataAll
}


