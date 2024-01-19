var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/question6.html");
})

app.post("/subscription",(req,res)=>{
    const{name,email,sub,format,typeSub,comment}=req.body;
    res.send(`<p>Name: ${name}<p><p>Email: ${email}<p><p>Subscription: ${sub}<p><p>Format of the email: ${format}<p><p>Type of the subscription you want: ${typeSub}<p><p>Comment: ${comment}<p>`);
})

app.listen(3000,()=>{
    console.log("server listening in port 3000");
})
