import React from 'react';

const FilterDropdown = ({ selectedType, setSelectedType }) => {
    return (
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="border p-2">
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
        </select>
    );
};

export default FilterDropdown;