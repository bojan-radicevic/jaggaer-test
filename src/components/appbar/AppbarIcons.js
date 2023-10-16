import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { SvgIcon, Box, Divider, Badge } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectIsAddToCartVisible } from 'store/data/dataSelector';

import Cart from 'assets/icons/cart.svg';
import Favorite from 'assets/icons/favorite.svg';
import FavoriteFilled from 'assets/icons/favorite-filled.svg';
import Facts from 'assets/icons/facts-soft.svg';

import { AddToCart } from 'components/add-to-cart/AddToCart';

const bounceAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const StyledBadge = styled(Badge)(({ animate }) => ({
  '& .MuiBadge-badge': {
    right: 12,
    top: 16
  },
  animationName: animate ? bounceAnimation : 'none',
  animationFillMode: 'both',
  animationDuration: '0.5s'
}));

const CartIcon = ({ items, animate }) => (
  <StyledBadge badgeContent={items} animate={animate} color="error">
    <SvgIcon>
      <Cart />
    </SvgIcon>
  </StyledBadge>
);

const FavoriteIcon = () => (
  <SvgIcon>
    <Favorite />
  </SvgIcon>
);

const FavoriteFilledIcon = () => (
  <SvgIcon color="error">
    <FavoriteFilled />
  </SvgIcon>
);

const FactIcon = () => (
  <SvgIcon>
    <Facts />
  </SvgIcon>
);

export const AppbarIcons = ({ items, isFavorite, unit }) => {
  const isAddToCartVisible = useSelector(selectIsAddToCartVisible);

  const [animate, setAnimate] = useState(false);

  // When `addToCart` prop changes, trigger the animation
  useEffect(() => {
    if (items) {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  }, [items]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        height: '100%',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary'
      }}
    >
      {isAddToCartVisible ? <AddToCart unit={unit} /> : null}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '24px',
          '& svg': {
            m: 1.5
          },
          '& hr': {
            mx: 0.5
          }
        }}
      >
        {isFavorite ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        <FactIcon />
        <Divider orientation="vertical" flexItem />
        <CartIcon items={items} animate={animate} />
      </Box>
    </Box>
  );
};
