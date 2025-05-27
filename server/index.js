import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./routes/auth.route.js";

const app = express();

const port = 3000;

const atlasURI =
  "mongodb+srv://allen:chancellor66@neliel.ptcuka3.mongodb.net/hibanadb?retryWrites=true&w=majority&appName=Neliel";

dotenv.config();

// connect to neliel (atlas db)
mongoose
  .connect(atlasURI)
  .then(() => {
    console.log(
      `connected to Neliel cluster!(atlas db),\nstate: ${mongoose.connection.readyState}`,
    );
  })
  .catch(() => {
    console.log("error connecting to Neliel cluster!(atlas db)");
  });

// json middleware
app.use(express.json());

// expose router
app.use(router);

// start express server
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

// send a get request!
app.get("/", (req, res) => {
  res.send("<h1>Hello and welcome to MERN!</h1>");
});
