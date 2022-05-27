import React, { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { getMovies } from "./../../api/movies";
import { useSearchParams } from "react-router-dom";
import Loader from "./../common/Loader";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMoviesData = async (filter) => {
      try {
        setIsLoading(true);
        const response = await getMovies(filter);
        setMovies(response.data.movies);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesData(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <div className="movies-container">
      <Loader isLoading={isLoading} />
      <div className="cards-container">{movies && movies.map((movie) => <MovieCard key={`movie-item-${movie.id}`} movie={movie} />)}</div>
    </div>
  );
};

export default Movies;
