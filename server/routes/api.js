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
var rimraf = require("rimraf");
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}) );
router.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});




// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);





//upload part
router.get('/getuser',auth, function(req, res){
  User.findById(req.payload._id, function(err, docs){
    if (err) console.log("err", err)
    else{
    var user = docs.roles
    console.log('all the user', user)
if(user == 'admin'){
  console.log('trueeeeeeeeeee')
   var pathDir = '/home/gsource/uploads/'
    router.post('/getall', function(req, res){
      if (err) throw err 
      else{
        User.find({}, function(err, docs){
          if (err) console.log("err", err)
          else{
              console.log('found')
              res.send(docs)
          } 
        })
      }
    })
  }else{
    var userDirName = req.payload._id + '_'+ req.payload.name
    var pathDir = '/home/gsource/uploads/' + userDirName
  }
  console.log('final path dir', pathDir)
  
  if (!fs.existsSync(pathDir) && user != 'admin'){
    fs.mkdirSync(pathDir, function(err){
      if (err){
        console.log('error while creating uploads dir',err)
      }else{
        console.log('Suceess! Dir upload is created', pathDir)
      }
    });

  }else{

  //Delete files and folder

  router.post('/removefile', function(req, res, next){
   var removePath = pathDir + req.body.filename.Path
  console.log('remove file data--------',   !req.body.filename.isFolder)
  console.log('remove file data',  removePath)
  if(!req.body.filename.isFolder){
    console.log('truew')
    if( fs.existsSync(removePath)) {
    fs.unlinkSync(removePath, function (err) {
      if (err) {
        console.log('Error while removing the file', err)
        res.send(err)

      } else{
        console.log('file removed successfully')
        res.json({'file': req.body.filename.Path})
      }
      // if no error, file has been deleted successfully
     
  }); 
}
  }else{
    if(req.body.filename.isFolder){
     
      rimraf(removePath, function(err){
        if(err) console.log('error removing dir', err)
        else console.log('folder removed succees')
      })
    }
      // here comes folder deletion part 
  }
})





  router.post('/fileUpload', (req, res)=>{
  console.log('FILLLLLLLLLLLLLLLLLLLLLEEEEEEUPPPPPPPPPLLLLLOOOOOOOOOAD',req.body)
   var uploadPath = path.join(pathDir ,req.body.path) 
   var fileparent = req.body.parent
  //FILE UPLOAD PROGRAM   
    console.log('file user upload path&*&*&*&*&*&*:::::::', uploadPath )
    var store = multer.diskStorage({
      destination:function(req,file,cb){
        cb(null, uploadPath);
        console.log('internal destination ______________________', uploadPath)
      },
      filename:function(req,file,cb){
        cb(null, file.originalname);
      }
    });

    var upload = multer({storage:store}).single('file');
    //console.log('###############################', upload)
    router.post('/upload', function(req,res,next){
      upload(req,res,function(err){
      if(err){
        return res.status(501).json({error:err});
      }
      //do all database record saving activity
      console.log('files uploaded successfully', req.file)
      var ext = path.extname(req.file.filename);
      return res.json({name:req.file.filename, Ext : ext, isFolder: false, parent:fileparent, Path : uploadPath});
      });
    });
    res.json({'uploadPath' : req.body.path})
  })
// to download files
    router.post('/download', function(req,res,next){
      console.log('download function')
      console.log(pathDir +'/'+ req.body.filename.Path)
      filepath = pathDir +'/'+ req.body.filename.Path;
      console.log('filepath',filepath)
      res.sendFile(filepath);
    });  

    //to create a folder in the server side 
    router.post('/createfolder', function(req, res, next){
      console.log('create folderrrrrrrrrr init', req.body.newfoldername.path)  
      if(!_.isNil(req.body.newfoldername.path) || ! _.isEmpty(req.body.newfoldername.path) ){
        var newDirPath = pathDir +'/'+ req.body.newfoldername.path + req.body.newfoldername.name;
      }else{
        var newDirPath = pathDir +'/'+ req.body.newfoldername.name;
      }
      console.log('Final Dir path to create a new folder', newDirPath)
      if (!fs.existsSync(newDirPath)){
        fs.mkdirSync(newDirPath, function(err){
          if (err){
            console.log('error while creating uploads dir',err)
          }else{
            console.log('folder', req.body.newfoldername.path + req.body.newfoldername.name  + ' '+ 'Created successfully')
            res.json({'folder':  req.body.newfoldername.path + req.body.newfoldername.name})
          }
        });
      }else{
        res.json({'folder':  req.body.newfoldername.path + req.body.newfoldername.name + ' '+ 'already exist'})
        console.log('file or folder already exist', req.body.newfoldername.path + req.body.newfoldername.name)
      }

    })
    // Get ALl the Files & folders from the server 
    var dir =  pathDir;
    console.log('1111111111111111111111111dirrrrrrrrrrrrrrrrrr', dir)
    router.post('/files', function(req, res) { 
      var parent = req.body.filename.parent
      var currentDir =  pathDir;
      var query = req.body.filename.path || '';
      console.log('222222222222222222file reader : query: ', query+ "************dir : "+ pathDir)
      console.log('333333333333333333333333path.join commmand ', path.join(dir, query))
      if (query) currentDir = path.join(dir, query);
      console.log("4444444444444444444browsing ", currentDir);
      fs.readdir(currentDir, function (err, files) {
        if (err) {
          // throw err;
          console.log('error while reading  dir', err)
        }
        console.log('55555555555555555555555readign the current directory', files)
        var data = [];
        files
        .forEach(function (file) {
          try {
            console.log("66666666666666666666666666processingile", file)
            var isDirectory = fs.statSync(path.join(currentDir,file)).isDirectory();
            if (isDirectory) {
              data.push({ name : file, isFolder: true,  parent: parent, Path : path.join(query, file)  });
            } else {
              var ext = path.extname(file);
              /* if(program.exclude && _.contains(program.exclude, ext)) {
              console.log("excluding file ", file);
              return;
              }      */  
              data.push({ name : file, Ext : ext, isFolder: false, parent:parent, Path : path.join(query, file) });
            
            }
          } catch(e) {
            console.log(e); 
          }        

        });

          data = _.sortBy(data, function(f) { return f.name });
         //console.log('77777777777777777777777777777dshfshdfbjdfbjsdbfjsdbfsdbfbsdhfbsdfbjsdbfdsbfbsdfb')
          res.send(data);

      });
    });

  }
} 
 });  
})







module.exports = router;