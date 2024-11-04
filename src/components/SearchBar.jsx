import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <div className="flex justify-center mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 w-1/2"
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">Search</button>
        </div>
    );
};

export default SearchBar;