import { useEffect, useState } from 'react';

export const useGetLocation = () => {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | undefined>(undefined);
  useEffect(() => {
    if (_.isUndefined(location)) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ latitude: pos?.coords?.latitude, longitude: pos?.coords?.longitude });
      });
    }
  }, []);
  return { location };
};
