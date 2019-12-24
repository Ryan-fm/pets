var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var data = {
  code: 200,
  msg: 'success'
}; //最后返回的json对象

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pet'
});

router.post('/',function (req,res,next) {
   let userName = req.body.uName
   let passWord = req.body.pWord
   let sql = "SELECT * FROM user where userName=?"
   pool.query(sql,[userName],(err,result)=>{
    if (err) {
       data.code = 500
       data.msg =err
     };
     console.log(result);
     if (result[0].passWord === passWord) {
        selectUser(result[0].userId)
     }else{
       data.code = 400
       data.msg = '账号或密码输入有误'
       res.statusCode = 200;
       res.setHeader("Access-Control-Allow-Origin", "*");
       res.setHeader('Content-Type', 'application/json');
       res.json(data);
     }
   });
   function selectUser(id) {
     let sql = "SELECT * FROM user_info where userId=?"
    pool.query(sql,[id], (err, result, fields)=>{
      if (err) {
        data.code = 500
        data.msg = err
      };
      data.code = 200
      data.msg = 'sucess'
      data.data = result[0]
      res.statusCode = 200;
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
    })
  }
})
// 用户注册接口
router.post('/add',function (req,res,next) {
  let userName = req.body.name
  let password = req.body.passWord
  let phone = req.body.phone
  //判断手机号码的唯一性 如果手机号码相同，就返回错误信息
  let sql = 'insert into user(userName,password,phone) values(?,?,?)'
  pool.query(sql,[userName,password,phone],(err,result,fields)=>{
    if(err) {
      data.code = 500
      data.msg = err
    };
    if (result){
      data.code = 200
      data.msg = 'sucess'
      res.statusCode = 200;
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
    }    
  })  
})
module.exports = router;