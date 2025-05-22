import app from "./app.js";

// Entry point for this backend.


const port = 3000

app.get("/", function(req, res){
    return res.send("Home Page!")
})

app.get("/contact", function(req, res){
    return res.send("Contact Page!")
})

app.get("/about", function(req, res){
    return res.send("About Page!")
})

app.listen(port, function(){
    console.log("Server is running!");
})