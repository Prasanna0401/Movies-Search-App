import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovieDetailsData = async () => {
            try {
                const response = await fetchMovieDetails(id);
                setMovie(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovieDetailsData();
    }, [id]);

    return (
        <div>
            <h1 className='text-4xl font-medium'>Title : {movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} className="w-full" style={{ height: '450px', width: '400px' }} />
            <h2 className='font-semibold'>Release Year : {movie.Year}</h2>
            <p>Genre : {movie.Genre}</p>
            <p>Plot Summary : {movie.Plot}</p>
            {/* <p>Ratings: {movie.Ratings.Source[0]}</p> */}
            <p>Cast : {movie.Actors}</p>
        </div>
    );
};

export default MovieDetailPage;