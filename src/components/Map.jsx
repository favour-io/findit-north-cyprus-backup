import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

export default function Map({ places }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [33.0, 35.2], // North Cyprus coordinates
      zoom: 9
    });

    // Add markers when map loads
    map.current.on('load', () => {
      places.forEach(place => {
        new mapboxgl.Marker()
          .setLngLat(place.location)
          .setPopup(new mapboxgl.Popup().setHTML(`
            <h3>${place.name}</h3>
            <p>${place.city}</p>
          `))
          .addTo(map.current);
      });
    });

    return () => map.current.remove();
  }, [places]);

  return <div ref={mapContainer} className="map-container" />;
}