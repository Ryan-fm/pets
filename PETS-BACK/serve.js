var Express = require('express');
var bodyParser = require('body-parser');
var app = Express();
const cors=require("cors");
var indexRouter = require('./routes/upload');
var userRouter = require('./routes/user')
// 解决跨域问题
app.use(cors({
  origin:"http://localhost:8080"
}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(Express.static('public'));
app.use(bodyParser.json());

// app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(2000, function (a) {
  console.log("Listening to port 2000");
});
module.exports = app;