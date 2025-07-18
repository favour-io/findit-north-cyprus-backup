export default function RoutePlanner({ selectedPlaces }) {
  const calculateRoute = () => {
    alert(`Optimized route for ${selectedPlaces.length} stops!`);
    // In a real app, use Mapbox Directions API
  };

  return (
    <div className="route-planner">
      <button onClick={calculateRoute}>🚀 Plan My Day</button>
    </div>
  );
}