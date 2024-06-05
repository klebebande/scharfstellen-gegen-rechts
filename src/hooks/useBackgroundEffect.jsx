// src/hooks/useBackgroundEffect.js

import { useEffect } from 'react';

const useBackgroundEffect = (className) => {
  useEffect(() => {
    // Add the specific background class when the component mounts
    document.body.classList.add(className);

    // Remove the specific background class when the component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};

export default useBackgroundEffect;
