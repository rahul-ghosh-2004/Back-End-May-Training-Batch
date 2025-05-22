// My entire server code will be present here.
// We have to install a package called "Express".

// initilize the npm first.
// then install the express package.
// create the server.

// using npm init command, you can initilize your backend.




import express from "express"  // import a package called "express"

// call the express function and store it inside a variable called app.
const app = express()

// We have to define a port number
const port = 3000

// by following the below steps you can create routes and controllers.
// "/name" --> route, the function is called as controller.
app.get("/", function(req, res){
    return res.json({ "message": "Welcome to my Home Page!" })
})

app.get("/about", function(req, res){
    return res.json({ "message": "It is my About Us Page!" })
})

app.get("/contact", function(req, res){
    return res.json({ "message": "Contact Us Page!" })
})


// by following the below steps, we can start our server.
// listen function helps to start the server.
// For starting it, we have to pass a port no.
app.listen(port, function(){
    console.log("Server is running!");
})