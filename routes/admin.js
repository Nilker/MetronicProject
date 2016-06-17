/**
 * Created by Leo on 2016/6/13.
 */
var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin');

router.use(function (req, res, next) {
  var url = req.originalUrl;
  if (url != "/admin/login" && !req.session.adminID) {
  //if (!req.session.adminID) {
    return res.render('admin-login');
  } else {
    next();
  }
});

router.post('/login', admin.login);
router.get('/logout', admin.logout);

router.get('/*', function (req, res, next) {
  //console.log('your url is: ', req.originalUrl);
  res.render('admin-control-panel');
});


module.exports = router;