import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%'
      }}
    />
  </Box>
);
