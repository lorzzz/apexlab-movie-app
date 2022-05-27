import React from "react";
import Movies from "./components/movie/Movies";
import Navbar from "./components/common/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieDetails from "./components/movie/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
