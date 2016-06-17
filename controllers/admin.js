/**
 * Created by Leo on 2016/6/14.
 */
var Admin = require('../models/admin');

//登录验证
exports.login = function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('username', username);
  console.log('password', password);
  Admin.findOne({'username': username, 'password': password}, function (err, admin) {
    if (err) {
      err.status = 400;
      return next(err);
    } else {
      if (!admin) {
        //return res.render('admin-login', {error: '用户名或密码错误'});
      } else {
        req.session.adminID = admin._id;
        //return res.render('admin-control-panel');
      }
      return res.redirect('/admin');
    }
  });
};

//管理员注销
exports.logout = function (req, res, next) {
  console.log('logout ready');
  req.session.adminID = null;
  res.redirect('/admin');
  //return res.render('admin-login');
};


