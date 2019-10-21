var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 4000

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

var campgrounds = [
    {name: "Niagara Falls", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg"},
    {name: "Marine Drive", image: "https://www.tripsavvy.com/thmb/yUM8q2-VUym6o52vUX8DkKlq4vk=/4241x2442/filters:fill(auto,1)/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg"},
    {name: "Sea-link", image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/07/03/589680-sea-link-bandra-worli-070317.jpg"},
    {name: "Niagara Falls", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg"},
    {name: "Marine Drive", image: "https://www.tripsavvy.com/thmb/yUM8q2-VUym6o52vUX8DkKlq4vk=/4241x2442/filters:fill(auto,1)/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg"},
    {name: "Sea-link", image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/07/03/589680-sea-link-bandra-worli-070317.jpg"},
    {name: "Niagara Falls", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/3Falls_Niagara.jpg"},
    {name: "Marine Drive", image: "https://www.tripsavvy.com/thmb/yUM8q2-VUym6o52vUX8DkKlq4vk=/4241x2442/filters:fill(auto,1)/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg"},
    {name: "Sea-link", image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/07/03/589680-sea-link-bandra-worli-070317.jpg"}
]

app.get("/", function(req, res){
    res.render("landing")
})

app.get("/campgrounds/new", function(req, res){
    res.render("new")
})

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds: campgrounds})
})

app.post("/campgrounds", function(req, res){
    name = req.body.name;
    image = req.body.image;
    var newCampGround = {name: name, image: image}
    campgrounds.push(newCampGround)
    res.redirect("campgrounds")
    // get data from the campgrounds array
    // redirect back to campgrounds page
})

app.listen(port, function(){
    console.log("Server running on port:"+port)
})