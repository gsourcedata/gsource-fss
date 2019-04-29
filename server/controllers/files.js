var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
var multer = require('multer');
var path = require('path');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var fs = require('fs')
var _ = require('lodash');
var request = require('request');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});



