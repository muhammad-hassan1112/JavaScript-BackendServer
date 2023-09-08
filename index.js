const http = require('http');
const fs = require('fs');

let port = 3000
let hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    const home = fs.readFileSync('./home.html')
    const about = fs.readFileSync('./about.html')
    const services = fs.readFileSync('./services.html')
    const contact = fs.readFileSync('./contact.html')
    res.writeHead(200,{'content-type':'text/html'});
    console.log(req.url); // is se if mein agar kisi bhi html page ko hit karne ki koshish karo to wo yaha (terminal/output) par print hoga
    if(req.url == '/') {
        res.end(home);
    }
    else if(req.url =='/about') {
        res.end(about);
    }
    else if(req.url =='/services') {
        res.end(services);
    }
    else if(req.url =="/contact"){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end(`<h1>page not found: erorr: ${res.statusCode}</h1>`);
    }
})

server.listen(port,hostname,()=>{
    console.log('listening on:- 127.0.0.1:3000');
});