import React, { useEffect, useState } from 'react';
import { useScrollTrigger } from '@mui/material';

export const ElevationScroll = ({ children }) => {
  const [target, setTarget] = useState(window);

  useEffect(() => {
    setTarget(document.getElementById('scrollContainer'));
  }, [document.getElementById('scrollContainer')]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: target
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};
