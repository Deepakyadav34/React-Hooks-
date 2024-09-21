import React, { useEffect, useState } from "react";
import './Movie.css'; // Make sure to create a CSS file for styling

const Movie = () => {
  const [movielist, setMovielist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=57ae30a1f3a14b747633fdc5c843f6e3"
    )
      .then((response) => response.json())
      .then((json) => setMovielist(json.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovie();          
  }, []);

  const filteredMovies = movielist.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white">
      <h1 className="text-4xl">Movie Mania</h1>
      <p className="p-4 m-4 text-3xl">
        <input 
          type="text" 
          placeholder="Enter a Movie Name" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </p>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              alt={movie.title} 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              className="movie-poster"
            />
            <h3 className="bg-gray-300 text-black">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
