import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const MovieDetail = ({ movie }) => {

    const { addFavorite, removeFavorite } = useFavorites();
    const isFavorite = movie.imdbID in favorites;

    const handleFavorite = () => {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover" />
            <p className="text-lg font-bold">Release Year: {movie.Year}</p>
            <p className="text-lg font-bold">Genre: {movie.Genre}</p>
            <p className="text-lg font-bold">Plot Summary: {movie.Plot}</p>
            <p className="text-lg font-bold">Ratings: {movie.Ratings}</p>
            <p className="text-lg font-bold">Cast: {movie.Actors}</p>
            <button onClick={handleFavorite} className="bg-blue-500 text-white p-2 rounded">
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default MovieDetail;