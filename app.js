var app = require("express")();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        {name: "McFadden Cove", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
        {name: "Coon Creek", image: "https://farm4.staticflickr.com/3742/10759552364_a796a5560a.jpg"},
        {name: "Washunga Bay", image: "https://farm3.staticflickr.com/2931/14128269785_f27fb630f3.jpg"}
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function () {
    console.log("YelpCamp Server Started");
});