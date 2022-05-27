import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import getImageOrFallbackUrl from "./../../helpers/imageHelper";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const getCategories = (genres) => {
    return (
      <>
        {genres.slice(0, 2).map((genre) => (
          <span key={`genre-${genre.name}`} className="category-item">{genre.name}</span>
        ))}
      </>
    );
  };

  return (
    <div className="card-container">
      <div className="movie-card">
        <Card sx={{ width: 225, boxShadow: 2 }}>
          <div className="movie-poster-container">
            <div className="category-container">{getCategories(movie.genres)}</div>

            <div className="movie-rating-container">
              <span>{movie.score}</span>
            </div>
            <img className="movie-poster" src={getImageOrFallbackUrl(movie.poster?.medium)} alt={movie.name} />
          </div>
          <CardContent>
            <div className="movie-title-container">
              <div>
                <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
