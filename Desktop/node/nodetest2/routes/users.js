var express = require('express');
var router = express.Router();

/* GET userlist */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({},{}, function(e, docs) {
    res.json(docs);
  });
});

/* POST to adduser. */
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, result) {
    res.send(
      (err === null) ? { msg: ''} : { msg: err }
    );
  });
});

/* DELETE to deleteuser */
router.delete('/deleteuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var userToDelete = req.params.id;
  collection.remove({'_id': userToDelete }, function(err) {
    res.send(
      (err === null) ? { msg: '' } : { msg: 'Error: ' + err }
    );
  });
});

/* UPDATE to updateuser */
router.put('/updateuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var userToUpdate = req.params.id;
  collection.update({'_id':userToUpdate}, {$set: req.body}, function(err) {
    res.send(
      (err === null) ? { msg: '' } : { msg: 'Error: ' + err }
    );
  });
});

module.exports = router;
