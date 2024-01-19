var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/question3.html")
})

app.post("/validate",(req,res)=>{
    const{name,pass,dob,gen,remark}=req.body;
    res.send(`<div style='font-weight:bolder'><p>Name: ${name}</p><p>Password: ${pass}</p><p>DOB: ${dob}</p><p>Gender: ${gen}</p><p>Remark: ${remark}</p></div>`);
})
app.listen(port,()=>{
    console.log(`listening in th port ${port}`);
})
