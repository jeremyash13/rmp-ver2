require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

const client = new MongoClient(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  if (err) {
    console.log(err);
  }
  app.options("*", cors());
  app.use(
    cors({
      origin: "*",
      methods: "GET,PUT,POST,DELETE"
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post("/art", async (req, res) => {
    console.log(req.body);
    try {
      const artCollection = client.db("rmp").collection("art");
      let queryType = [];
      let queryCategory = [];
      let querySortBy = [];

      if (req.body.type[0] === "all") {
        queryType = ["giclee", "wrap", "standard"];
      } else {
        queryType = [...req.body.type];
      }

      if (req.body.category[0] === "all") {
        queryCategory = ["western", "landscape", "patriotic", "wildlife"];
      } else {
        queryCategory = [...req.body.category];
      }
      if (req.body.sortBy[0] === "recentlyAdded") {
        querySortBy = { age: -1 };
      } else if (req.body.sortBy[0] === "az") {
        querySortBy = { title: 1 };
      }

      const cursor = new Promise((resolve, reject) => {
        const data = artCollection
          .find({
            type: { $in: [...queryType] },
            category: { $in: [...queryCategory] }
          })
          .sort(querySortBy)
          .toArray();
        resolve(data);
      });
      cursor.then(data => {
        res.header({
          "Access-Control-Allow-Origin": "*"
        });
        res.json(data);
      });
      console.log("POST request made at /art");
    } catch (err) {
      console.log(err);
    }
  });

  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
});