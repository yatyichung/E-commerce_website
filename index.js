//IMPORT REQUIRED MODULES
const express = require('express')
const path = require("path") //path is a built-in Node module


const app = express() //create an express app and store in app variable
const port = process.env.PORT || 8888 //set up a port number



//set up paths to important files ad folders
//set up template engine
app.set("views", path.join(__dirname, "views")) //set express views to use <app_directory>/views
app.set("view engine", "pug")
//set up path for static file (e.g. css and client side JS)
app.use(express.static(path.join(__dirname,"public")))

//testing express
// app.get("/", (request,response)=>{
//     //do something in here for the / page route
//     response.status(200).send("test number 2");
// });


//set up page routes
app.get("/", (request,response) => {
    response.render("index", { title: "Home" })
})

app.get("/bestseller", (request,response) => {
    response.render("bestseller", { title: "Best Seller" })
})

app.get("/dresses", (request,response) => {
    response.render("dresses", { title: "Dresses" })
})




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})