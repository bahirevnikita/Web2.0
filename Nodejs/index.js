//console.log("Hello world");

const { table } = require("console");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const comments = [{"id": 1, "text": "hello worlds"}, {"id": 2, "text": "hello worlds hello worlds"}];
const stat = {};


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const user_agent = req.headers["user-agent"];
  if (stat[user_agent] === undefined){
    stat[user_agent] = 1;
  }
  else{
    stat[user_agent]++;
  }
  res.setHeader("Content-Type", "text/plain");
  if (req.url==="/" && req.method==="GET")
  {
    res.end("Hello world");
    return;
  }
  if (req.url==="/comments" && req.method==="POST"){
    res.end(JSON.stringify(comments));
    return;
  }
  if (req.url ==="/stats" && req.method==="GET" ){
    let html ="<table border = 1><tr><td>user_agent</td><td>count</td></tr>"
    for(let key in stat){
      html += "<tr><td> "+key+"</td><td> "+stat[key]+" </td></tr>"
    }
    html += "</table>"
    res.setHeader("Content-Type", "text/html");
    res.end(html);
    return
  }
  res.statusCode = 400 //Bad request;
  res.end("Bad request\n" + req.url + " " + req.method);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});