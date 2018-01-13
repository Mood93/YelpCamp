var app = require("express")();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA
var campgroundSchema = new mongoose.Schema( {
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create( {
//    name: "Coon Creek", 
//    image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"
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

//campgrounds GET
app.get("/campgrounds", function (req, res) {
    Campground.find({}, function(err, campgrounds) {
        err ? console.log(err) : res.render("campgrounds", {campgrounds: campgrounds});
    });
});

//campgrounds POST
app.post("/campgrounds", function(req, res) {
    
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    //create new campground and save to DB
    Campground.create(newCampground, function(err, newCampground){
        err ? console.log(err) : res.redirect("/campgrounds");
    })
});

//campgrounds/new GET
app.get("/campgrounds/new", function (req, res) {
    
    res.render("new.ejs");
});




app.listen(3000, function () {
    console.log("YelpCamp Server Started");
});