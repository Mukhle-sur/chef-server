const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const master_chef = require("./chef.json");
const chef_food = require("./Recipe.json");

app.get("/", (req, res) => {
  res.send("Hello Italian all chef ");
});

app.get("/chef", (req, res) => {
  res.send(master_chef);
});
app.get("/food", (req, res) => {
  res.send(chef_food);
});

app.get("/food/:id", (req, res) => {
  const id = req.params.id;
  const selectFoodDetails = chef_food.find((food) => food.id == id);
  res.send(selectFoodDetails);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const masterId = chef_food.filter((food) => parseInt(food.chef_id) === id);
  res.send(masterId);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
