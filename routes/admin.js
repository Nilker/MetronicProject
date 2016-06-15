/**
 * Created by Leo on 2016/6/13.
 */
var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
  res.render('admin-control-panel');
});


module.exports = router;