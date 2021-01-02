import { useEffect, useState } from 'react';

export const useDetechInitialRender = () => {
  const [isInitialRender, setIsInitialRender] = useState(false);
  useEffect(() => {
    if (!isInitialRender) {
      setIsInitialRender(true);
    }
  }, []);
  return {
    isInitialRender,
  };
};
