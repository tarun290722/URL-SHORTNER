const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/authRouter");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connectToDB = require("./model/connect");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const urlsRouter = require("./routes/urls");
connectToDB(process.env.DB_URi)
  .then(() => {
    console.log("Db Connected Successfully");
  })
  .catch((err) => {
    console.log("Error in connecting Db", err);
  });
app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/api/url", urlsRouter);
app.listen(PORT, () => {
  console.log("Server is Listenin on:", PORT);
});
