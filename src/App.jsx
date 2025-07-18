import { useState } from 'react';
import Map from './components/Map';
import Filter from './components/Filter';
import RoutePlanner from './components/RoutePlanner';
import Favorites from './components/Favorites';
import { places } from './data/places';
import './styles.css';

export default function App() {
  const [filters, setFilters] = useState({
    city: "All",
    vibe: "All",
    summerMust: false,
  });
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const filteredPlaces = places.filter(place => {
    return (
      (filters.city === "All" || place.city === filters.city) &&
      (filters.vibe === "All" || place.vibe === filters.vibe) &&
      (!filters.summerMust || place.summerMust)
    );
  });

  return (
    <div className="app">
      <h1>FindIt North Cyprus 🍍</h1>
      <Filter filters={filters} setFilters={setFilters} />
      <RoutePlanner selectedPlaces={selectedPlaces} />
      <Favorites />
      <Map 
        filteredPlaces={filteredPlaces} 
        onSelectPlace={setSelectedPlaces} 
      />
    </div>
  );
}