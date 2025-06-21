import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// backend --> https://backend.com
// frontend for S --> https://s.com
// frontend for J --> https://j.com 

// Cross Origin Resource Sharing
app.use(cors({
   //  origin: ["https://j.com", "https://s.com"]
    origin: "*",  // Anyone can access
    credentials: true
}))

app.use(cookieParser())
/*
Two important packages are there called,
1. cors(), Cross Origin Resource Sharing [ npm i/install cors ]
   ( It basically tells that what frontend can access this backend )
2. cookieParser(), For storing credentials we should use browser's cookie.
*/

// Hey server! please take all the static files (like images, videos, etc) and hold/store it inside the "public" folder.
app.use(express.static("public"))

/*
Data can be received from the frontend in two different ways.
1. Via URL. Example,
   https://flipkart.com/serach?q=hplaptops
2. In JSON format.
   {
      "email": "example.com",
      "password": "12345678"
   }
*/

// Now my server can receive the data which i have sent in the JSON format (Object).
app.use(express.json())

// Now my server can receive the data which i have sent via URL.
app.use(express.urlencoded())


export default app



// import express from "express"

// const app = express()

// End points --> Destinations or Addresses, where some operation will be performed.

// 200 --> Everything is okey (No error is there)
// 400 --> Client side error
// 500 --> Server side error

// app.get("/home", (req, res) => {
//    return res
//    .status(200)
//    .json({
//       "message": "It is my Home Page!"
//    })
// })

// app.get("/login", (req, res) => {
//    return res
//    .status(200)
//    .json({
//       "message": "Login Page!"
//    })
// })

// app.listen(3000, () => {
//    console.log("Server is running!")
// })