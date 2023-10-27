import express from "express";
import methodOverride from "method-override";
import mongoose from "mongoose";
import { config } from "dotenv";
import trailController from "./controllers/trailController.js";

const app = express();
config();

// Configure mongoose
mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Auth Routes
app.use("/trail", trailController);

app.get("/", (req, res) => {
  res.render("/pages/HomePage");
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});