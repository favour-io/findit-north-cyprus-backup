export default function Filter({ filters, setFilters }) {
  const toggleFilter = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <div className="filter-bar">
      <button 
        onClick={() => toggleFilter('summerMust')} 
        className={filters.summerMust ? 'active' : ''}
      >
        🌞 Summer Musts
      </button>
      <button 
        onClick={() => toggleFilter('vibe_chill')} 
        className={filters.vibe_chill ? 'active' : ''}
      >
        🏖️ Chill Spots
      </button>
      {/* Add more filters */}
    </div>
  );
}