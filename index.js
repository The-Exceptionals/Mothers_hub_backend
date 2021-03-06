const express = require("express");
const listEndpoints = require('express-list-endpoints')
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(
  "mongodb+srv://root:root@cluster0.dvywr.mongodb.net/MHDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});

//middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const postRoute = require("./routes/post");
app.use("/post", postRoute);
const eventRoute = require("./routes/event");
app.use("/event", eventRoute);

data = {
  msg: "This is Mothers Hub server",
  info: "This is a root endpoint",
  Working: "It's a work in progress :)",
  request:
    "Support me",
};

app.get("/getallroutes", (req, res) => {  
  let get = app._router.stack.filter(r => r.route && r.route.methods.get).map(r => r.route.path);
  let post = app._router.stack.filter(r => r.route && r.route.methods.post).map(r => r.route.path);
  res.send({ get: get, post: post });
});

app.route("/").get((req, res) => res.json(data));

app.listen(port, "0.0.0.0", () =>
  console.log(`Welcome, you're listening at port ${port}`)
);
