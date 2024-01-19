var http = require('http');
var port = 3000;
var server = http.createServer(function(req,res){
    if(req.url ==="/")
    {
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<center>");
        res.write("<form style='border-right:1px solid black;border-bottom:1px solid black;width: max-content;padding: 20px;text-align: left;font-size: 20px;' action='/validate' method='POST'>");
        res.write("<input type='text' name='name' id='name' placeholder='User'><br><br>");
        res.write("<input type='password' name='pass' id='pass' placeholder='Password'><br><br>");
        res.write("<label for='dob'>DOB:</label>");
        res.write("<input type='date' name='dob' id='dob'><br><br>");
        res.write("<label for='gen'>Gender:</label>");
        res.write("<input type='radio' name='gen' id='gen' value='Male'>Male<input type='radio' name='gen' id='gen' value='Female'>Female<br><br>");
        res.write("<label for='rem'>Remarks:</label>");
        res.write("<input type='text' name='rem' id='rem'><br><br>");
        res.write("<input type='submit' value='Submit'>");
        res.write("</form>");
        res.write("</center>");
        res.end();

    }
    if(req.url==='/validate' && req.method==="POST")
    {
        let arr =[];
        req.on('data',chunk=>{
            arr.push(chunk);
        })

        req.on('end',()=>{
            arr=Buffer.concat(arr).toString();
            let name = (arr.split('&')[0]).split('=')[1];
            let pass = (arr.split('&')[1]).split('=')[1];
            let dob = (arr.split('&')[2]).split('=')[1];
            let gen = (arr.split('&')[3]).split('=')[1];
            let rem = (arr.split('&')[4]).split('=')[1];
            res.writeHead(200,{'Content-type':'text/html'});
            res.write("<div style='font-weight:bolder;text-align:left'>");
            res.write(`<p>Welcome ${name}</p>`);
            res.write(`<p>pwd: ${pass}</p>`);
            res.write(`<p>DOB ${dob}</p>`);
            res.write(`<p>Gender: ${gen}</p>`);
            res.write(`<p>Remarks: ${rem}</p>`);
            res.write("</div>")
            res.end();
        })
    }
});
server.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
