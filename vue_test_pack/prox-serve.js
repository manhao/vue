var express =require('express');
var config = require('./config/index');

var port = 9000;

var app = express();
var router =express.Router();
app.use(express.static('./dist'));

router.get('/',function(req,res,next){
   req.url = '/index.html';
   next();
});

app.use(router);
    
    var appData = require('./data.json');//加载本地数据文件
	var seller = appData.seller;//获取对应的本地数据
	var goods = appData.goods;
	var ratings = appData.ratings;
	app.use('/api',router);//通过路由请求数据
    app.get('/api/seller',(req,res) => {
           res.json({
              errno:0,
              data:seller
           })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
       }),
       app.get('/api/goods',(req,res) => {
           res.json({
              errno:0,
              data:goods
           })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
       }),
       app.get('/api/ratings',(req,res) => {
           res.json({
              errno:0,
              data:ratings
           })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
       });

       app.listen(port);