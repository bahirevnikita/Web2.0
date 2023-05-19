const { ObjectId } = require("mongodb");
const db = require("../configs/configs");

async function insertDocDB(body){
  const usersCollection = await db.collection('users');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${day}:${month}:${year}`;
  body.date = formattedDate;
  await usersCollection.insertOne(body);
}

async function postcom(req,res){
  if (req.headers['content-type'] === 'application/json'){
      body = req.body;
      if (!body.name || !body.text || body === "" || Object.keys(body).length !== 2) {
          res.status(404).send('Error');
      }
      else{
          await insertDocDB(body);
          const find = await findDocDB();
          res.send(find);
      }
  }
  else{
      res.status(404).send('Error');
  }
}


async function insertGood(data) {
  const goods = db.collection("goods");
  await goods.insertOne(data);
}


async function findGoods() {
  const goods = db.collection("goods");
  const result = await goods.find();
  return result.toArray();
}


async function findGood(id) {
  const goods = db.collection("goods");
  const result = await goods.findOne({ _id: new ObjectId(id) });
  return result;
}

module.exports = {

  findGoods,
  findGood,
  insertGood,
};
