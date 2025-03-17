const FilterDropdown = ({ onFilterChange }) => (
    <select onChange={(e) => onFilterChange(e.target.value)} className="border p-2 rounded mt-2  bg-slate-900 text-white">
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
    </select>
);

export default FilterDropdown;