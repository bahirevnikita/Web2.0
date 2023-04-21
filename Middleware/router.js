const express = require('express')
const router = express.Router()
const comments = [{"id": 1, "text": "hello worlds"}, {"id": 2, "text": "hello worlds hello worlds"}];
const stat = {};
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const helmet = require('helmet')

// middleware that is specific to this router
router.use((req, res, next) => {
    const user_agent = req.headers["user-agent"];
    if (stat[user_agent] === undefined){
        stat[user_agent] = 1;
    }
    else{
        stat[user_agent]++;
    }
    res.setHeader("Content-Type", "text/plain");
    next()
})

router.use(helmet())
router.use(helmet.hsts({
    maxAge: 10886400000,
    includeSubDomains: true,
    preload: true,
    force: true,
}))

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
router.use(morgan('combined', { stream: accessLogStream }))

router.get("/form*", (req, res, next) => {
    if (req.query.login === ""){
        res.end("error")
        return;
    }
    next()
});
router.get("/api*", (req, res, next) => {
    if(req.query.key != "123"){ 
        res.statusCode = 400 //Bad request;
    res.end("Bad request, valid key required\n" + req.url + " " + req.method);
    return
    }
    next()
});
router.get("/form/auth", (req, res) => {
    let html = "<form>login<input type='text' name='login'/>password<input type='text' name='pass'/><button>button</button></form>"
    res.setHeader("Content-Type", "text/html");
    res.end(html);
})
router.get("/form/reg", (req, res) => {
    let html = "<form>login<input type='text' name='login'/>password<input type='text'name='pass1'/>password<input type='text' name='pass2'/><button>button</button></form>"
    res.setHeader("Content-Type", "text/html");
    res.end(html);
})
router.get("/api/stats", (req, res) =>{
    res.send(JSON.stringify(stat));
})
router.get("/api/comment", (req, res) =>{
    res.send(JSON.stringify(comments));
})

router.get("/", (req, res) => {
    res.send("Hello world");
})
router.post("/comments", (req, res) =>{
    res.send(JSON.stringify(comments));
})
router.get("/stats", (req, res) => {
    let html ="<table border = 1><tr><td>user_agent</td><td>count</td></tr>"
    for(let key in stat){
    html += "<tr><td> "+key+"</td><td> "+stat[key]+" </td></tr>"
    }
    html += "</table>"
    res.setHeader("Content-Type", "text/html");
    res.end(html);
})
router.use((req, res, next) => {
    res.statusCode = 400 //Bad request;
    res.end("Bad request\n" + req.url + " " + req.method);
});

module.exports = router

