var http = require('http');
var port = 3000;
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<center>");
    res.write("<div style='border:2px solid black;width:fit-content;padding:10px;text-align:left'>");
    res.write("<h3>Hi user, You are accessing the following URL</h3>");
    res.write(`<p>URL: http://localhost:${port}/login/db/et</p>`);
    res.write(`<p>Method: ${req.method}</p>`);
    res.write("</div>");
    res.write("</center>");
    res.end();
});
server.listen(port,()=>{
    console.log(`Server listening in the port ${port}`);
})
