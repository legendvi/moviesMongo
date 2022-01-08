import { client } from "./index.js";

async function deleteMovieById(id) {
  return await client.db("b251we").collection("movies").deleteOne({ id: id });
}
async function updateMovieByID(id, updatedMovie) {
  return await client
    .db("b251we")
    .collection("movies")
    .updateOne({ id: id }, { $set: updatedMovie });
}
async function createMovies(movies) {
  return await client.db("b251we").collection("movies").insertMany(movies);
}
async function getMoviesById(id) {
  return await client
    .db("b251we")
    .collection("movies")
    .find({ id: id })
    .toArray();
}
async function getMovies(filters) {
  return await client.db("b251we").collection("movies").find(filters).toArray();
}

export {
  deleteMovieById,
  updateMovieByID,
  createMovies,
  getMovies,
  getMoviesById,
};
