import { useEffect, useState } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      //State is additive, errorMessage is not being deleted or overwritten, it stays at its previous value
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};
