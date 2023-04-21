const express = require('express')
const router = express.Router()
const comments = [{"id": 1, "text": "hello worlds"}, {"id": 2, "text": "hello worlds hello worlds"}];
const stat = {};

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