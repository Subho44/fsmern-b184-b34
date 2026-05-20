const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectdb = require("./config/db");


// dotenv config

dotenv.config();


// connect mongodb

connectdb();


// app initialize

const app = express();


// middleware

app.use(cors());

app.use(express.json());


// default route

app.get("/", (req, res) => {

  res.send("API is Working");

});


// routes

app.use("/api/courses", require("./routes/courseroutes"));


// port

const port = process.env.PORT || 5600;


// server start

app.listen(port, () => {

  console.log(`Server Running On Port ${port}`);

});