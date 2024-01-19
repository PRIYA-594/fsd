var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/question5.html");
})
app.post("/marksheet",(req,res)=>{
    const{name,fathername,iname,batch,OA,WD,IT,cp}=req.body;
    res.send(`<h1>Mark Sheet</h1><table><tr><td>Name:</td><td>${name}</td></tr><tr><td>Father Name:</td><td>${fathername}</td></tr><tr><td>Institute Name:</td><td>${iname}</td></tr><tr><td>Batch:</td><td>${batch}</td></tr><tr><td>Office Automation:</td><td>${OA}</td></tr><tr><td>Web Designing:</td><td>${WD}</td></tr><tr><td>IT:</td><td>${IT}</td></tr><tr><td>c# programing:</td><td>${cp}</td></tr></table>`);
})

app.listen(3000,()=>{
    console.log("server listening in port 3000");
})
