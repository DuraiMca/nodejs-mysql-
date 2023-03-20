const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const config=require("./config/config")
const db=require("./models/usermodel")
const routes = require("./routes");

db.sequelize.sync({ alter: true, force: false })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
  res.send("server connected")
})

app.use('/api',routes)

app.listen(config.PORT, () => {
  console.log(`server connected on : ${config.PORT}`)
})