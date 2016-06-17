/**
 * Created by Leo on 2016/6/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  username: String,
  password: String
});

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;