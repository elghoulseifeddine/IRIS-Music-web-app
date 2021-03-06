require("dotenv").config({ path: "./config/.env" });


const express = require ("express");
const connectDB = require("./config/ConnectDB");
// const client = require("./Routes/client");
// const artist = require("./Routes/artist");
// const profile = require("./Routes/profile");
const post = require("./Routes/post");
const user = require("./Routes/user");
const app= express();

connectDB();

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/upload',express.static('upload'));
app.use("/post", post);
app.use("/user", user);


const PORT=process.env.PORT;


app.listen(PORT,(err) => {
    err
      ? console.log("Server connection failed")
      : console.log(`Server connected successfully on PORT ${PORT}`);
  });