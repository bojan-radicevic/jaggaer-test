import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

const PriceContainer = styled(Box)({
  display: 'flex',
  padding: 5,
  borderTop: '1px solid #E0E0E0',
  borderBottom: '1px solid #E0E0E0',
  width: 'fit-content'
});

const DiscountPrice = styled(Typography)({
  marginLeft: 10
});

export const PriceBreaks = ({ qty, total, disc, currency, unit }) => {
  const discount = (total - disc) / qty;

  return (
    <PriceContainer rowspacing={2}>
      <Typography variant="body1">{`ex ${qty} ${unit} `}</Typography>
      <DiscountPrice variant="body1">{`${discount} ${currency}/${unit}`}</DiscountPrice>
    </PriceContainer>
  );
};
