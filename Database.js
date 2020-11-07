var express = require('express'); 
var app = express(); 
var bodyParser = require('bodyparser'); 
var urlencodedParser = bodyParser.urlencoded({extended:true}); 
var MongoClient = require('mongodb').MongoClient; 
app.use(express.static(__dirname + "/public")); 
app.get('/register',function(req,res ){
res.sendFile(__dirname + "/" + "regist.html"); })
app.post('/regis',urlencodedParser, function(req, res)
{response = {email:req.body.email, password:req.body.psw};
MongoClient.connect('mongodb://localhost:27017/',function(err,db)
{
if(err) throw err;
console.log("Connected to Database");
var dbo = db.db("mycustomer");
dbo.collection('customers').insertOne(response, function(err,result)
{if (err) 
    throw err;
    console.log("1 Document Inserted");
});
});
console.log(response);
res.redirect('/regist');
;})
app.get('/log',function(req,res){res.sendFile(__dirname + "/" +"login.html");
})
app.post('/login1',urlencodedParser, function(req, res){
response = {email:req.body.email, password:req.body.psw};
MongoClient.connect('mongodb://localhost:27017/',function(err,db)
{
if(err) throw err;
console.log("Connected to Database");
var dbo = db.db("mycustomer");
dbo.collection('customers').insertOne(response, function(err,result)
{if (err) throw err;
console.log("1 Document Inserted");});});
console.log(response);
res.redirect('/regist');
;})
app.get('/regist',function(req,res){
    res.sendFile(__dirname + "/" +"ud.html");
})
app.get('/select',function(req,res){
res.sendFile(__dirname + "/" +"select availability.html");
})
app.post('/availability',urlencodedParser, function(req, res){
response = {from:req.body.from,
    to:req.body.to,
    departure:req.body.departure,
    return:req.body.return,
    trip:req.body.trip,
    flight_name:req.body.selecflight,
};
MongoClient.connect('mongodb://localhost:27017/',function(err,db)
{
if(err) throw err;
console.log("Connected to Database");
var dbo = db.db("mycustomer");
dbo.collection('availability').
insertOne(response, function(err,result)
{if (err) throw err;
    console.log("1 Document Inserted");});});
console.log(response);
res.redirect('/pay');
;})
app.get('/pay',function(req,res){
res.sendFile(__dirname + "/" +"payment.html");
})
app.post('/payment',urlencodedParser, function(req, res){
response ={account:req.body.acc_no,pin:req.body.pin,amount:req.body.amount,coupon_no:req.body.coupon,};
MongoClient.connect('mongodb://localhost:27017/',function(err,db)
{
if(err) throw err;
console.log("Connected to Database");
var dbo = db.db("mycustomer");
dbo.collection('payment').insertOne(response, function(err,result)
{if (err) throw err;
console.log("1 Document Inserted");});});
console.log(response);
res.redirect('/feedback');
})
app.get('/feedback',function(req,res){
res.sendFile(__dirname + "/" +"feedback.html");
})
app.post('/feedback',urlencodedParser, function(req, res){
var abc=req.body.f_name;
response ={Name:req.body.f_name, Email:req.body.f_email, complaint:req.body.f_complain};
MongoClient.connect('mongodb://localhost:27017/',function(err,db)
{
if(err) throw err;
console.log("Connected to Database");
var dbo = db.db("mycustomer");
dbo.collection('feedback').insertOne(response, function(err,result)
{if (err) throw err;console.log("1 Document Inserted" );});});
console.log(response); res.send(abc +"thank you for your feedback"); })
var server = app.listen(8080, function(){ 
    var host = server.address().address 
    var port = server.address().port 
    console.log("Example app listening at http://%s: %s//register",host,port)})