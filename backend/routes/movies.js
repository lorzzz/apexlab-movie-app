const express = require("express");
const { getMovies, getMovieExternalIds } = require("../api/movieApi");
const { getPopularMovies } = require("../api/movieApi");
const { getMovie } = require("../api/movieApi");
const getWikipediaData = require("../api/wikipediaApi");
const router = express.Router();

router.get("/", async (req, res) => {
  const filter = req.query.filter;
  if (filter) {
    const moviesResponse = await getMovies(filter);
    res.json({ movies: moviesResponse.data.data.searchMovies });
  } else {
    const moviesResponse = await getPopularMovies();
    res.json({ movies: moviesResponse.data.data.popularMovies });
  }
});

router.get("/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    if (!movieId) {
      res.sendStatus(400).json("Movie ID should be defined.");
    }

    const movieResponse = await getMovie(movieId);
    const wikipediaReponse = await getWikipediaData(movieResponse.data.data.movie.name);
    const externalIdsResponse = await getMovieExternalIds(movieId);
    const wikipediaDetails = Object.values(wikipediaReponse.data.query.pages)[0];

    const movieDetails = {
      ...movieResponse.data.data.movie,
      wikipediaDescription: wikipediaDetails.extract,
      wikipediaUrl: `https://en.wikipedia.org/wiki?curid=${wikipediaDetails.pageid}`,
      imdbUrl: `https://www.imdb.com/title/${externalIdsResponse.data.imdb_id}`,
    };

    res.send(movieDetails);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
