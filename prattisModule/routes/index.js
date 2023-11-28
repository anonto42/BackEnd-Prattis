var express = require('express');
var router = express.Router();
var userModel = require('./users');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {
  const UserDone = await userModel.create({
    name:'sajim',
    age:17,
  });
  res.send(UserDone);
})


module.exports = router;
