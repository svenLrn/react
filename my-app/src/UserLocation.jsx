import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";


export function UserLocation() {
  const { location, getCurrentLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Location not available.</p>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
}


