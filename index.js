import { MongoClient } from "mongodb";
import express from "express";
import dotenv from "dotenv";
import moviesRoutes from "./routes/moviesRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  return client.connect();
}
export const client = await createConnection();

app.use(express.json());
app.use("/movies", moviesRoutes);
app.use((req, res, next) => {
  res.send("Hello World");
});
app.listen(PORT, () => console.log("Server Started", PORT));
