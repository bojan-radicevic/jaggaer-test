import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const BulletContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 10
});

export const BulletList = ({ feature, val }) => (
  <BulletContainer>
    <CircleIcon
      sx={{
        width: '0.75rem'
      }}
    />
    <Typography variant="body1" color="#A9A9A9">
      {`${feature}:`}
    </Typography>
    <Typography variant="body1">{val}</Typography>
  </BulletContainer>
);
