var app = require("express")();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA
var campgroundSchema = new mongoose.Schema( {
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create( {
//    name: "Coon Creek", 
//    image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg",
//    description: "This is a creek full of coons."
//
//    }, function(err, campground) {
//        
//        err ? console.log(err) : console.log("NEWLY CREATED CAMPGROUND: " + campground);
//        
//    }
//);

//root GET
app.get("/", function (req, res) {
    
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({}, function(err, campgrounds) {
        err ? console.log(err) : res.render("index", {campgrounds: campgrounds});
    });
});

//CREATE - add new campground to db
app.post("/campgrounds", function(req, res) {
    
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    
    //create new campground and save to DB
    Campground.create(newCampground, function(err, newCampground){
        err ? console.log(err) : res.redirect("/campgrounds");
    })
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
    
    res.render("new.ejs");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find campground with ID
    Campground.findById(req.params.id, function (err, foundCampground) {
        err ? console.log(err) : res.render("show", {campground: foundCampground});
    });
});


app.listen(3000, function () {
    console.log("YelpCamp Server Started");
});