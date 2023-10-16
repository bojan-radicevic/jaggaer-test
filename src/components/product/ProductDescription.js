import React from 'react';
import styled from '@emotion/styled';
import { Typography, Grid } from '@mui/material';

import { Title } from 'components/ui/Title';
import { ProductDetails } from 'components/product/ProductDetails';
import { ProductPricingAndShipping } from 'components/product/ProductPricingAndShipping';

const WrapperContainer = styled(Grid)({
  background: '#EFEFEF',
  padding: 24,
  paddingBottom: 100
});

export const ProductDescription = ({ article }) => {
  return (
    <>
      {article ? (
        <WrapperContainer container>
          <Grid item xs={12}>
            <Title>DESCRIPTION</Title>
          </Grid>
          <Grid item xs={12} md={12} lg={9} sx={{ paddingBottom: '24px' }}>
            <Typography variant="body1" color="#696969">
              {article.description_long}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={9}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ProductDetails article={article} />
              </Grid>
              <Grid item xs={6}>
                <ProductPricingAndShipping article={article} />
              </Grid>
            </Grid>
          </Grid>
        </WrapperContainer>
      ) : null}
    </>
  );
};
