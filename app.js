var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "McFadden Cove", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Coon Creek", image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
    {name: "Washunga Bay", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"},{name: "McFadden Cove", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Coon Creek", image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
    {name: "Washunga Bay", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"},    {name: "McFadden Cove", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Coon Creek", image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
    {name: "Washunga Bay", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"},{name: "McFadden Cove", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Coon Creek", image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
    {name: "Washunga Bay", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"}
]

//root GET
app.get("/", function (req, res) {
    
    res.render("landing");
});

//campgrounds GET
app.get("/campgrounds", function (req, res) {
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

//campgrounds POST
app.post("/campgrounds", function(req, res) {
    
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

//campgrounds/new GET
app.get("/campgrounds/new", function (req, res) {
    
    res.render("new.ejs");
});




app.listen(3000, function () {
    console.log("YelpCamp Server Started");
});