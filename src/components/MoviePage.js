/* eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import { fetchMovies } from '../redux/movies/movies';
import '../styles/MoviePage.scss';

const MoviePage = () => {
  const handleClick = () => {};
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <>
      <section className="home">
        <ul className="list-items">
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.image.original} alt="awesome" />
              <div className="items">
                <h2>{movie.name}</h2>
                <BsFillHeartFill />
              </div>
              <div className="btn">
                <button type="button" onClick={handleClick}>
                  show more
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MoviePage;
