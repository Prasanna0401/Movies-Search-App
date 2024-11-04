import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import FilterDropdown from '../components/FilterDropdown';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const response = await fetchMovies(searchTerm, selectedType);
                setMovies(response.Search);
                setTotalPages(Math.ceil(response.totalResults / 10));
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoviesData();
    }, [searchTerm, selectedType]);

    const handleSearch = async () => { setCurrentPage(1); };

    const onPageChange = (page) => { setCurrentPage(page); };

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
            <FilterDropdown selectedType={selectedType} setSelectedType={setSelectedType} />
            <div className="grid grid-cols-3 gap-4">
                {movies?.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />)
                )}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>);
};

export default Home;