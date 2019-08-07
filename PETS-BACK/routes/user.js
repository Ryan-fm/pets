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
  password: '666666',
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
  let userName = req.body.uName
  let password = req.body.pWord
  let phone = req.body.phone
  let address = req.body.address
  let sex = req.body.sex
  let img = req.body.img
  //判断手机号码的唯一性 如果手机号码相同，就返回错误信息
  let sql = 'SELECT * FROM '
  let sql = 'insert into user_info(name,phone,address,sex,img) values(?,?,?,?,?,?)'
  pool.query(sql,[userName,password,phone,address,sex,img],(err,res)=>{
    if(err) {
      data.code = 500
      data.msg = err
    };
    if (result[0].passWord === passWord) {
       
    }
  })  
})
module.exports = router;