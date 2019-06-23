var express = require('express');
var multer = require('multer');
var router = express.Router();
var mysql = require('mysql');

var data = {
  code: 200,
  msg: 'success'
}; //最后返回的json对象

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pets'
});
var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, "./Images");
  },
  filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3);
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

router.post("/api/Upload", function (req, res) {
  upload(req, res, function (err) {
      if (err) {
          return res.end("Something went wrong!");
      }
      console.log(req.body);
      console.log(upload);
      return res.end("File uploaded sucessfully!.");
  });
});
module.export=router;