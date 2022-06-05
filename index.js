import express from "express";
import bodyParser from "body-parser";
import countriesRoutes from "./routes/countries.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/countries", countriesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});
