import React from 'react';
import styled from '@emotion/styled';
import { Grid, Box, Divider, Typography } from '@mui/material';

import { Title } from 'components/ui/Title';
import { BulletList } from 'components/ui/BulletList';
import { PriceBreaks } from 'components/ui/PriceBreaks';

const Wrapper = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  padding: 20,
  height: '100%'
});

const TitleContainer = styled(Grid)({
  marginBottom: 10
});

const BoxMargin = styled(Box)({
  marginTop: 20
});

export const ProductPricingAndShipping = ({ article }) => (
  <Wrapper container>
    <Box>
      <TitleContainer container>
        <Grid item>
          <Title>PRICING & SHIPPING</Title>
        </Grid>
      </TitleContainer>
    </Box>
    <Divider />
    <BoxMargin>
      <BulletList
        feature="Minimum order"
        val={`${article.minimum_order_quantity} ${article?.unit}`}
      />
      <BulletList
        feature="Shipping"
        val={`${article?.transport_costs.toLocaleString(undefined, {
          minimumFractionDigits: 2
        })} ${article?.currency}`}
      />
      <BulletList feature="Delivery" val={`${article?.delivery_time} days`} />
    </BoxMargin>
    <BoxMargin>
      <Typography variant="body1" color="#A9A9A9">
        Price Breaks
      </Typography>
    </BoxMargin>
    <Box>
      <PriceBreaks
        qty={20}
        disc={article.price_breaks[20]}
        total={article.price}
        currency={article.currency}
        unit={article.unit}
      />
      <PriceBreaks
        qty={50}
        disc={article.price_breaks[50]}
        total={article.price}
        currency={article.currency}
        unit={article.unit}
      />
      <PriceBreaks
        qty={100}
        disc={article.price_breaks[100]}
        total={article.price}
        currency={article.currency}
        unit={article.unit}
      />
    </Box>
  </Wrapper>
);
