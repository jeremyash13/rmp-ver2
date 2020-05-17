require("dotenv").config();
const AWS = require("aws-sdk");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(err);
  }
  app.options("*", cors());
  app.use(
    cors({
      origin: "*",
      methods: "GET,PUT,POST,DELETE",
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post("/gallery", async (req, res) => {
    try {
      console.log(req.body);
      const artCollection = client.db("rmp").collection("art");
      let queryType = [];
      let queryCategory = [];
      let querySortBy = [];
      let queryArtist = [];
      let search = "";

      if (req.body.type === "all") {
        queryType = ["Canvas Giclee", "Gallery Wrap", "Paper Giclee"];
      } else {
        queryType = [req.body.type];
      }
      if (req.body.artist === "all") {
        queryArtist = null;
      } else {
        queryArtist = [req.body.artist];
      }

      if (req.body.category === "all") {
        queryCategory = ["landscape", "western", "wildlife", "patriotic"];
      } else {
        queryCategory = [req.body.category];
      }
      if (req.body.sortBy === "recentlyAdded") {
        querySortBy = { age: -1 };
      } else if (req.body.sortBy === "artist") {
        querySortBy = { artist: 1 };
      }
      if (req.body.search !== "") {
        search = req.body.search;
      }

      const cursor = new Promise((resolve, reject) => {
        if (search !== "") {
          const searchResults = artCollection
            .find({
              $text: { $search: search },
            })
            .sort(querySortBy)
            .toArray();
          resolve(searchResults);
        }
        if (queryArtist === null) {
          //if all artists is selected
          const data = artCollection
            .find({
              type: { $in: [...queryType] },
              tags: { $in: [...queryCategory] },
            })
            .sort(querySortBy)
            .toArray();
          resolve(data);
        } else {
          //if one artist is selected
          const data = artCollection
            .find({
              type: { $in: [...queryType] },
              tags: { $in: [...queryCategory] },
              artist: { $in: [...queryArtist] },
            })
            .sort(querySortBy)
            .toArray();
          resolve(data);
        }
      });
      cursor.then((data) => {
        res.header({
          "Access-Control-Allow-Origin": "*",
        });
        console.log("POST request made at /art");
        console.log(data)
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/edit", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("art");
      const {
        _id,
        title,
        artist,
        src,
        category,
        type,
        options,
        tags,
        age,
      } = req.body;
      if (_id) {
        // if objectId is truthy -> update respective document, else -> create new document
        artCollection
          .updateOne(
            { _id: ObjectId(_id.toString()) },
            {
              $set: {
                title: title,
                artist: artist,
                src: src,
                category: category,
                type: type,
                options: options,
                tags: tags,
                age: new Date(age),
              },
            }
          )
          .then(() => {
            console.log("POST request made at /edit");
            res.json({ msg: "entry successfully updated" });
          });
      } else {
        artCollection
          .insertOne({
            title: title,
            artist: artist,
            src: src,
            category: category,
            type: type,
            options: options,
            tags: tags,
            age: new Date(age),
          })
          .then(() => {
            console.log("POST request made at /edit");
            res.json({ msg: "entry successfully added" });
          });
      }
    } catch (err) {
      res.json({ msg: err });
      console.log(err);
    }
  });
  app.post("/s3", upload.single("file"), async (req, res) => {
    console.log("POST request made at /s3");
    console.log(req.file);
    try {
      let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
      });
      const params = {
        Bucket: BUCKET_NAME,
        Body: req.file.buffer,
        Key: req.body.name,
        ContentType: "image/jpeg",
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log("error in callback");
          console.log(err);
        }
        console.log("success");
        console.log(data);
        res.json({
          msg: "image successfully uploaded to AWS S3",
          location: data.Location,
        });
      });
    } catch (err) {
      res.json({ msg: err });
      console.log(err);
    }
  });
  app.post("/delete", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("art");

      artCollection
        .deleteOne({ _id: ObjectId(req.body._id.toString()) })
        .then(() => {
          console.log("POST request made at /delete");
          res.json({ msg: "entry successfully deleted" });
        });
    } catch (err) {
      res.json({ msg: err });
      console.log(err);
    }
  });

  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
});
