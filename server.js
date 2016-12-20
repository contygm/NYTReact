// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// get all saved articles
app.get("/api/saved", function(req, res) {
	Article.find({})
	.sort([["date", "descending"]])
	.exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	});
});

// save article to database
app.post("/api/saved", function(req, res) {
	Article.create({
		title: req.body.title,
		date: Date.now(),
		url: req.body.url
	},function(err) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send("Saved Search");
	    }
	});
});

// delete a saved article
app.delete("/api/saved", function(req, res) {
	var id = req.param("id");

	Article.find({_id: id})
	.remove()
	.exec(function(err, data){
		if(err){
	      console.log(err);
	    }
	    else {
	      res.send("Deleted the article");
	    }
	})
});

// Main "/" Route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
