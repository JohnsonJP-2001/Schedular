// jshint esverion:6

const express = require("express"); // use Express
const bodyParser = require("body-parser"); // for parsing POST requests
const router = require("./router");
const mongoo = require("mongoose");
const MongoClient = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
// const xssFilters = require("xss-filters");
require("date-format-lite"); // add date format

const app = express(); // create application
const port = 3000; // port for listening

mongoo.set("strictQuery", false);

// connection
mongoo.connect("mongodb://localhost:27017/eventDB");

// schema
const itemSchema = {
  start_date: Date,
  end_date: Date,
  text: String,
};

// model
const Item = mongoo.model("Item", itemSchema);

// It's necessary for parsing POST requests
// the line below is used for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// return static pages from the "./public" directory
app.use(express.static(__dirname + "/public"));

// start server
app.listen(port, () => {
  console.log("Server is running on port " + port + "...");
});

// getall
app.get("/events", async (req, res) => {
  var result = await Item.find();
  var temp = [];

  result.forEach((entry) => {
    // format date and time
    entry.start_date = entry.start_date.format("YYYY-MM-DD hh:mm");
    entry.end_date = entry.end_date.format("YYYY-MM-DD hh:mm");
    temp.push({
      id: entry._id,
      text: entry.text,
      start_date: entry.start_date,
      end_date: entry.end_date,
    });
  });

  console.log(result);

  //output response
  res.send(temp);
});

// insert
app.post("/events", async (req, res) => {
  const item = new Item(req.body);
  item.save();
  console.log(item._id);
  res.send({ tid: String(item._id) });
});

// update
app.put("/events/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    Object.assign(item, req.body);
    await item.save();

    res.send({ data: "updated" });
  } catch (error) {
    res.status(404).send({ error: "item is not found" });
  }
});

// delete
app.delete("/events/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Item.findOneAndRemove({ _id: req.params.id });
    res.send({ data: true });
  } catch {
    res.send({ data: false });
  }
});
