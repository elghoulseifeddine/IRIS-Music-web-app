require("dotenv").config({ path: "./config/.env" });


const express = require ("express");
const connectDB = require("./config/ConnectDB");
const client = require("./Routes/client");
const artist = require("./Routes/artist");
const app= express();

connectDB();

app.use(express.json());
app.use("/client", client);
app.use("/artist", artist);


const PORT=process.env.PORT;


app.listen(PORT,(err) => {
    err
      ? console.log("Server connection failed")
      : console.log(`Server connected successfully on PORT ${PORT}`);
  });