import { useEffect, useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    } else {
      setError(new Error("Error"));
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); 

  return { location, getCurrentLocation, error, loading };
}
