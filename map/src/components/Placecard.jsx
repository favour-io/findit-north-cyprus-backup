import { useFavorites } from '../hooks/useFavorites';

export default function PlaceCard({ place }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="place-card">
      <h3>
        {place.emoji} {place.name} 
        <span className="city-tag">{place.city}</span>
        <button 
          onClick={() => toggleFavorite(place.id)} 
          className="favorite-btn"
        >
          {favorites.includes(place.id) ? '❤️' : '🤍'}
        </button>
      </h3>
      <p>Rating: {place.rating}/5 | Price: {place.price}</p>
      <Reviews place={place} />
    </div>
  );
}