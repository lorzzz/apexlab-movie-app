import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/movies";
import { useState } from "react";
import Loader from "./../common/Loader";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import getImageOrFallbackUrl from './../../helpers/imageHelper';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getMovie(id);
        setMovie(response.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  const renderRelatedMovies = () => {
    return (
      <div>
        <Paper sx={{ marginTop: "1.25em" }} elevation={3}>
          <div className="movies-container">
            <div className="cards-container">
              {movie.recommended.map((recommendedMovie) => (
                <MovieCard key={`movie-${recommendedMovie.id}`} movie={recommendedMovie} />
              ))}
            </div>
          </div>
        </Paper>
      </div>
    );
  };

  const renderMovieDetails = () => {
    return (
      <Container maxWidth="lg">
        <div>
          <Paper sx={{ marginTop: "1.25em" }} elevation={3}>
            <div className="movie-details-container">
              <div className="image">
                <img src={getImageOrFallbackUrl(movie.poster?.medium)} alt={movie.name} />
              </div>
              <div className="info">
                <div className="info-container">
                  <Typography variant="h4" component="h5">
                    {movie.name}
                  </Typography>
                  <p>({movie.runtime} min)</p>
                  <div className="score-container">{movie.score}/10</div>
                  <p> {movie.wikipediaDescription}</p>
                  {movie.wikipediaDescription && <span>(Source: Wikipedia)</span>}
                  <div className="buttons-container">
                    <a href={movie.imdbUrl} target="_blank" rel="noreferrer">
                      <Button sx={{ bgcolor: "#f5c518" }} variant="contained">
                        IMDB
                      </Button>
                    </a>
                    <a href={movie.wikipediaUrl} target="_blank" rel="noreferrer">
                      <Button variant="text">Wikipedia</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </Container>
    );
  };

  return (
    <div>
      <Loader isLoading={isLoading} />
      {movie && renderMovieDetails()}
      {movie && renderRelatedMovies()}
    </div>
  );
};

export default MovieDetails;
