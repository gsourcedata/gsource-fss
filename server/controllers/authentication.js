var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var fs = require('fs');
var path = require('path')

module.exports.register = function(req, res) {

    // if(!req.body.name || !req.body.email || !req.body.password) {
    //   sendJSONresponse(res, 400, {
    //     "message": "All fields required"
    //   });
    //   return;
    // }
    var dir = '/home/gsource/uploads/'
    var user = new User();
  
    user.name = req.body.name;
    user.email = req.body.email;
  
    user.setPassword(req.body.password);
  
    user.save(function(err, data) {
      if (err) {
        res.send(err)
      }else{
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token,
        "id" : data._id,
        "email": data.email
      });
      var userDirPath = dir + data._id 
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, function(err){
          if (err){
            console.log('error while creating uploads dir',err)
          }else{
              console.log('Suceess! Dir upload is created')
          }
        });

    }else{
      if (!fs.existsSync(userDirPath)){
        fs.mkdirSync(userDirPath, function(err){
          if (err){
            console.log('Error while creating the user Dir', err)
          }else{
            console.log('dir created sucess fully')
          }
        })
      }
    }
    }
    });
  
  };
  
  module.exports.login = function(req, res) {
    // if(!req.body.email || !req.body.password) {
    //   sendJSONresponse(res, 400, {
    //     "message": "All fields required"
    //   });
    //   return;
    // }
  
    passport.authenticate('local', function(err, user, info){
      var token;
  
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token, 
            "id": user._id,
            "email": user.email
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  
  };
  