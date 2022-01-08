import express from "express";

import movies from "../movies.js";
import {
  getMovies,
  getMoviesById,
  createMovies,
  updateMovieByID,
  deleteMovieById,
} from "../helper.js";
const routes = express.Router();
routes.get("", async (req, res) => {
  const filters = req.query;
  if (filters.rating) filters.rating = +filters.rating;
  const filteredUser = await getMovies(filters);
  res.json(filteredUser);
});

routes.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await getMoviesById(id);
  res.send(result ? result : { msg: "Movie not Found" });
});
routes.post(async (req, res) => {
  const movies = req.body;
  console.log(movies);
  const result = await createMovies(movies);

  res.send(result ? result : { msg: "Movie not Found" });
});

routes.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedMovie = req.body;
  console.log(movies);
  const result = await updateMovieByID(id, updatedMovie);

  res.send(result ? result : { msg: "Movie not Found" });
});

routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const movies = req.body;

  console.log(movies);
  const result = await deleteMovieById(id);

  res.send(result ? result : { msg: "Movie not Found" });
});

export default routes;
