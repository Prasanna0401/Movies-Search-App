import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="border p-4">
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="w-full" />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </Link>
        </div>
    );
};

export default MovieCard;