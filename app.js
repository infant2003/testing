//package field
var express=require('express');
var mysql=require('mysql');
var bodyparser=require('body-parser');
var app=express();
var serveStatic=require('serve-static')
app.use(bodyparser.urlencoded({extended:true}));
//app.use(express.static(__dirname,'/public',{}));
app.set("view engine","ejs");//download ejs for this
//app.use(serveStatic(__dirname + '/public', {}));

//connection field
var connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'alwin',
    database:'joinus'
});
connect.query("use joinus");

//app get field
app.get("/",function (req,res){
    var q="select count(*) as count from user";
    connect.query(q,function (err,result){
        if(err) throw (err);
        var count=result[0].count;
        res.render("home",{got: count});
    });
});
app.get("/lucky",function(req,res){
    var num=(Math.floor(Math.random()*10)+1);
    res.send("Your lucky number is "+num);
});

//app post field
app.post("/register",function(req,res){
    var person={email:req.body.email};
    var q='insert into user set?';
    connect.query(q,person,function(err,result){
       if(err) throw (err);
       console.log(result);
       res.send("Thanks for joining");
    });
});

//app listen field
app.listen(8000,function (){
    console.log("Port 8080 works properly");
});
