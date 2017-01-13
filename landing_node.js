//use packages
var express=require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app=express(),
 http = require('http').Server(app);
var admin = require('./routes/fone.js');
//use middleware
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json({
    limit: '9950mb'
}));
app.use(bodyParser.urlencoded({
    limit: '9950mb',
    extended: true
}));
app.use(bodyParser.json())
app.use(cookieParser());


app.get('/advertiser_benefits', admin.login);
app.get('/user_benefits', admin.user);
app.get('/termsandconditions', admin.terms);
app.get('/carrier', admin.carrier);



http.listen(2222);
console.log('server running on 2222');