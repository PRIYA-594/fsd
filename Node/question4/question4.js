var express = require('express');
var app = express();

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

app.get("/user/fgpwd",(req,res)=>{
    res.sendFile(__dirname+"/forgot password.html");
})

app.use(function (req, res) {
    res.status(404).send('404 page');
});

app.listen(3000,()=>{
    console.log("server listening in the port 3000");
})
