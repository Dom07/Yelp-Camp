var express     = require('express'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    app         = express(),
    Campground  = require("./models/campground")
    port        = 4000

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true})
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.render("landing")
})

// adding a new campground page
app.get("/campgrounds/new", function(req, res){
    res.render("new")
})

// viewing all campgrounds
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err) console.log(err)
        else res.render("index", {campgrounds: campgrounds})
    })
})

// inserting a new campground
app.post("/campgrounds", function(req, res){
    name = req.body.name;
    image = req.body.image;
    description = req.body.description;
    var newCampGround = {name: name, image: image, description: description}
    Campground.create(newCampGround, function(err, newCampground){
        if(err) console.log(err)
        else res.redirect("campgrounds")
    })
})

// show information of a campground
app.get("/campgrounds/:id", function(req, res){
    var id = req.params.id
    Campground.findById(id, function(err, foundCampground){
        if(err) console.log(err)
        else res.render("show", {campground: foundCampground})
    })
})

app.listen(port, function(){
    console.log("Server running on port:"+port)
})