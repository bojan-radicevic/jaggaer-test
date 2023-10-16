import React from 'react';
import { Typography } from '@mui/material';

export const Title = ({ children }) => (
  <Typography
    variant="h6"
    color="error"
    sx={{ fontSize: '1rem', fontWeight: 600 }}
  >
    {children}
  </Typography>
);
