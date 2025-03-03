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
const sharp = require("sharp");

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
  // app.use(cors());
  app.use(cors({
    origin: 'https://www.rockymountainpublishing.net',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/frames", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("frames");
      const getFrames = async () => {
        const cursor = artCollection.find({}).toArray();
        return cursor;
      };
      getFrames().then((data) => {
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/frames", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("frames");

      const { title, line, src } = req.body;

      artCollection
        .insertOne({
          title: title,
          line: line,
          src: src,
        })
        .then(() => {
          console.log("POST request made at /frames");
          res.json({ msg: "entry successfully added" });
        });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/deleteframe", async (req, res) => {
    try {
      const collection = client.db("rmp").collection("frames");

      const { id } = req.body;

      collection.deleteOne({ _id: ObjectId(id.toString()) }).then(() => {
        console.log("POST request made at /deleteframe");
        res.json({ msg: "entry successfully deleted" });
      });
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/gallery", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("art");
      let queryType = [];
      let queryCategory = [];
      let querySortBy = [];
      let queryArtist = [];
      let topSellers;
      let search = "";
      const pageNumber = req.body.pageNumber;
      const skipAmount = 25 * pageNumber - 25;
      let limitResults = req.body.limitResults;

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

      if (req.body.category === "topSellers") {
        topSellers = true;
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
          let searchResults;
          if (queryArtist !== null) {
            // if one artist is selected
            if (pageNumber > 1) {
              searchResults = artCollection
                .find({
                  type: { $in: [...queryType] },
                  artist: { $in: [...queryArtist] },
                  $text: { $search: search },
                })
                .project({ score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } })
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
            } else {
              searchResults = artCollection
                .find({
                  type: { $in: [...queryType] },
                  artist: { $in: [...queryArtist] },
                  $text: { $search: search },
                })
                .project({ score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } })
                .limit(limitResults)
                .toArray();
            }
          } else {
            // if all artists is selected
            if (pageNumber > 1) {
              searchResults = artCollection
                .find({
                  type: { $in: [...queryType] },
                  $text: { $search: search },
                })
                .project({ score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } })
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
            } else {
              searchResults = artCollection
                .find({
                  type: { $in: [...queryType] },
                  $text: { $search: search },
                })
                .project({ score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } })
                .limit(limitResults)
                .toArray();
            }
          }
          resolve(searchResults);
        }
        if (topSellers) {
          if (pageNumber > 1) {
            // subsequent results
            const data = artCollection
              .find({
                topSeller: true,
                type: { $in: [...queryType] },
              })
              .hint("RecentlyAdded")
              .skip(skipAmount)
              .limit(limitResults)
              .toArray();
            resolve(data);
          } else {
            //initial 25 results
            const data = artCollection
              .find({
                topSeller: true,
                type: { $in: [...queryType] },
              })
              .hint("RecentlyAdded")
              .limit(limitResults)
              .toArray();
            resolve(data);
          }
        }
        if (queryArtist === null) {
          //if all artists is selected
          if (req.body.category === "all") {
            // if all categories is selected
            if (pageNumber > 1) {
              // subsequent results
              const data = artCollection
                .find({
                  category: { $in: [...queryCategory] },
                  type: { $in: [...queryType] },
                })
                .hint("RecentlyAdded")
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
              resolve(data);
            } else {
              //initial 25 results
              const data = artCollection
                .find({
                  category: { $in: [...queryCategory] },
                  type: { $in: [...queryType] },
                })
                .hint("RecentlyAdded")
                .limit(limitResults)
                .toArray();
              resolve(data);
            }
          } else {
            // if a particular category is selected
            if (pageNumber > 1) {
              // subsequent results
              const data = artCollection
                .find({
                  category: { $in: [...queryCategory] },
                  type: { $in: [...queryType] },
                })
                .hint("CategoryRecentlyAdded")
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
              resolve(data);
            } else {
              //initial 25 results
              const data = artCollection
                .find({
                  category: { $in: [...queryCategory] },
                  type: { $in: [...queryType] },
                })
                .hint("CategoryRecentlyAdded")
                .limit(limitResults)
                .toArray();
              resolve(data);
            }
          }
        } else {
          //if one artist is selected
          if (req.body.category === "all") {
            // if all cateorgies is selected
            if (pageNumber > 1) {
              const data = artCollection
                .find({
                  type: { $in: [...queryType] },
                  artist: { $in: [...queryArtist] },
                })
                .hint("RecentlyAdded")
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
              resolve(data);
            } else {
              const data = artCollection
                .find({
                  type: { $in: [...queryType] },
                  artist: { $in: [...queryArtist] },
                })
                .hint("RecentlyAdded")
                .limit(limitResults)
                .toArray();
              resolve(data);
            }
          } else {
            //if one particular category is selected
            if (pageNumber > 1) {
              const data = artCollection
                .find({
                  type: { $in: [...queryType] },
                  category: { $in: [...queryCategory] },
                  artist: { $in: [...queryArtist] },
                })
                .hint("RecentlyAdded")
                .skip(skipAmount)
                .limit(limitResults)
                .toArray();
              resolve(data);
            } else {
              const data = artCollection
                .find({
                  type: { $in: [...queryType] },
                  category: { $in: [...queryCategory] },
                  artist: { $in: [...queryArtist] },
                })
                .hint("RecentlyAdded")
                .limit(limitResults)
                .toArray();
              resolve(data);
            }
          }
        }
      });
      cursor.then((data) => {
        res.header({
          "Access-Control-Allow-Origin": "*",
        });
        console.log("POST request made at /art");
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/addtopseller", async (req, res) => {
    try {
      console.log("POST request @ /addtopseller");
      const artCollection = client.db("rmp").collection("art");
      artCollection.updateOne(
        {
          _id: ObjectId(req.body._id),
        },
        { $set: { topSeller: true } }
      );
      res.json({ message: "success" });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/removetopseller", async (req, res) => {
    try {
      console.log("POST request @ /removetopseller");
      const artCollection = client.db("rmp").collection("art");
      artCollection.updateOne(
        {
          _id: ObjectId(req.body._id),
        },
        { $set: { topSeller: false } }
      );
      res.json({ message: "success" });
    } catch (err) {
      console.log(err);
    }
  });
  app.get("/topsellers", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("art");
      const getTopSellers = async () => {
        const cursor = artCollection
          .find({
            topSeller: true,
          })
          .hint("RecentlyAdded")
          .toArray();
        return cursor;
      };
      getTopSellers().then((data) => {
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  });
  app.post("/autocomplete", async (req, res) => {
    try {
      let search = req.body.text;
      const artCollection = client.db("rmp").collection("art");
      const getArt = async () => {
        const cursor = artCollection
          .find({
            $text: { $search: search },
          })
          .project({ score: { $meta: "textScore" } })
          .sort({ score: { $meta: "textScore" } })
          .limit(5)
          .toArray();
        return cursor;
      };
      getArt().then((data) => {
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/edit", async (req, res) => {
    try {
      const artCollection = client.db("rmp").collection("art");
      const { _id, title, artist, src, category, type, options, tags, age } =
        req.body;
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
    try {
      //img compression
      let imgBuffer;
      let newKey;

      if (req.body.name.includes(".png")) {
        newKey = req.body.name.replace(".png", "");
        imgBuffer = await sharp(req.file.buffer).toFormat("png").toBuffer();
      }
      if (req.body.name.includes(".jpg")) {
        newKey = req.body.name.replace(".jpg", "");
        imgBuffer = await sharp(req.file.buffer)
          .toFormat("jpg", { quality: 70 })
          .toBuffer();
      }

      let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
      });
      const params = {
        Bucket: BUCKET_NAME,
        Body: imgBuffer,
        Key: newKey,
        ContentType: "image/jpg",
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log("error in callback");
          console.log(err);
        }
        console.log("upload success");
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
