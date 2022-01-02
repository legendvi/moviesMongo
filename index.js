import { MongoClient } from "mongodb";
import express from "express";
import movies from "./movies.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 9000;

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  return client.connect();
}
const client = await createConnection();

app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.get("/movies", async (req, res) => {
  const filters = req.query;
  if (filters.rating) filters.rating = +filters.rating;
  const filteredUser = await client
    .db("b251we")
    .collection("movies")
    .find(filters)
    .toArray();
  // const filteredUser = movies.filter((movie) => {
  //   let isValid = true;
  //   for (key in filters) {
  //     isValid = isValid && movie[key].toString() === filters[key];
  //   }
  //   return isValid;
  // });

  res.send(filteredUser);
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  // const result = find((item) => item.id === id);
  const result = await client
    .db("b251we")
    .collection("movies")
    .find({ id: id })
    .toArray();
  res.send(result ? result : { msg: "Movie not Found" });
});
app.post("/movies", async (req, res) => {
  const movies = req.body;
  // const result = find((item) => item.id === id);
  console.log(movies);
  const result = await client
    .db("b251we")
    .collection("movies")
    .insertMany(movies);

  res.send(result ? result : { msg: "Movie not Found" });
});

app.put("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const rating = req.body.rating;
  // const result = find((item) => item.id === id);
  console.log(movies);
  const result = await client
    .db("b251we")
    .collection("movies")
    .updateOne({ id: id }, { $set: { rating: rating } });

  res.send(result ? result : { msg: "Movie not Found" });
});

app.delete("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const movies = req.body;
  // const result = find((item) => item.id === id);
  console.log(movies);
  const result = await client
    .db("b251we")
    .collection("movies")
    .deleteOne({ id: id });

  res.send(result ? result : { msg: "Movie not Found" });
});
app.listen(PORT, () => console.log("Server Started", PORT));
