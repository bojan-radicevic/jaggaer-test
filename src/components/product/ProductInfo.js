import React, { useRef, useEffect } from 'react';
import { Grid, SvgIcon, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { setAddToCartVisibility } from 'store/data/dataSlice';

import Discount from 'assets/icons/discount.svg';

import { RatingStars } from 'components/ui/RatingStars';
import { AddToCart } from 'components/add-to-cart/AddToCart';

const ProductWrapper = styled(Grid)({
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  maxWidth: 500
});

const DiscountIcon = () => (
  <SvgIcon>
    <Discount />
  </SvgIcon>
);

const PriceContainer = styled(Grid)({
  alignItems: 'center'
});

export const ProductInfo = ({ article }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const callbackFunction = entries => {
    const [entry] = entries;
    dispatch(setAddToCartVisibility(!entry.isIntersecting));
  };
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <>
      {article && (
        <ProductWrapper container>
          <Grid item>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                lineHeight: '1.35rem',
                fontWeight: 600,
                marginBottom: '6px'
              }}
            >
              {article.description_short}
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Typography color="#A9A9A9">by</Typography>
              </Grid>
              <Grid item>
                <Link
                  href={article.supplier_link}
                  underline="none"
                  sx={{
                    color: '#327189'
                  }}
                >{` Supplier ${article.supplier_name}`}</Link>
              </Grid>
            </Grid>
            <Grid item>
              <RatingStars article={article} />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography>{`${article.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })} ${article.currency}`}</Typography>
                </Grid>
                <Grid item>
                  <PriceContainer
                    container
                    sx={{
                      '& svg': {
                        marginLeft: '6px'
                      }
                    }}
                  >
                    <Typography color="#A9A9A9">{`+ ${article.transport_costs.toLocaleString(
                      undefined,
                      {
                        minimumFractionDigits: 2
                      }
                    )} ${article.currency} shipping`}</Typography>
                    <DiscountIcon />
                  </PriceContainer>
                </Grid>
              </Grid>
              <Typography color="#A9A9A9">all prices incl 10% taxes</Typography>
            </Grid>
          </Grid>

          <Grid item ref={containerRef} sx={{ marginBottom: '8px' }}>
            <AddToCart unit={article.unit} />
          </Grid>
        </ProductWrapper>
      )}
    </>
  );
};
