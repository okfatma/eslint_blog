var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ name: 'Fatma', surname: "Can", age: 26 });
});

module.exports = router;
