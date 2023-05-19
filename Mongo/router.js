const express = require('express')
const router = express.Router()
const {findGoods} = require('./services/services')
const {findGood} = require('./services/services')
const {insertGood} = require('./services/services')

router.get("/goods/:id?", async (req, res) => {
    if (req.params.id){
        res.json(await findGood(req.params.id));
    }
    else{
        res.json(await findGoods());
    }
})
router.post("/goods", async (req, res) => {
    res.json(await insertGood(req.body))
})
router.use((req, res, next) => {
    res.statusCode = 400 //Bad request;
    res.end("Bad request\n" + req.url + " " + req.method);
});

module.exports = router