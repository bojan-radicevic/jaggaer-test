import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';

const RatingStyle = styled(Rating)({
  marginTop: 15,
  marginBottom: 25
});

export const RatingStars = ({ article }) => {
  const [value, setValue] = useState(article?.stars);

  return (
    <RatingStyle
      value={value}
      precision={0.1}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
