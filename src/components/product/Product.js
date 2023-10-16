import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { ProductGallery } from 'components/product/ProductGallery';
import { ProductInfo } from 'components/product/ProductInfo';

const ProductWrapper = styled(Grid)({
  padding: 24
});

export const Product = ({ article }) => (
  <ProductWrapper container spacing={2}>
    <Grid item>
      <ProductGallery article={article} />
    </Grid>
    <Grid item>
      <ProductInfo article={article} />
    </Grid>
  </ProductWrapper>
);
