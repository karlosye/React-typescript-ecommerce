// set up express
const express = require("express");
const app = express(); 

const api_key = require("./utils/api_key");

const adminRoutes = require("./routes/admin");

const path = require("path");

const mongoose = require("mongoose");

// configure bodyParser to parse incoming JSON data
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// allow CORS:
app.use((req, res, next) => {
  // set response headers:
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/admin", adminRoutes);

mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://admin-Karlos:${api_key}@meetups.sqbg7zn.mongodb.net/ecommerce?retryWrites=true&w=majority`
  )
  .then((response) => {
    console.log("DB connected...");
    app.listen(8080, () => {
      console.log("server started");
    });
  })
  .catch((error) => {
    console.log(error);
  });
