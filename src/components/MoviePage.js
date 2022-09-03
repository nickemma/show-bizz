import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movies/movies';

const MoviePage = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image.original} alt="awesome" />
          <p>{Object.values(movie.genres)}</p>
        </li>
      ))}
    </ul>
  );
};

export default MoviePage;
