import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { Grid, Button, TextField, Typography, SvgIcon } from '@mui/material';

import { addToCart } from 'store/data/dataSlice';

import Add from 'assets/icons/add.svg';

const AddIcon = () => (
  <SvgIcon>
    <Add />
  </SvgIcon>
);

const InputStyle = styled(TextField)({
  width: 60,
  marginRight: 10
});

const Unit = styled(Typography)({
  width: 50,
  fontSize: '1rem',
  fontWeight: 600
});

const AddWrapper = styled(Grid)({
  alignItems: 'center',
  height: 40
});

export const AddToCart = ({ unit }) => {
  const [amount, setAmount] = useState('1');
  const dispatch = useDispatch();

  const inputHandle = e => {
    setAmount(e.target.value);
  };

  const handleAddToChart = () => {
    dispatch(addToCart(parseInt(amount)));
  };
  return (
    <AddWrapper container alignItems="center">
      <InputStyle
        size="small"
        type="number"
        onChange={inputHandle}
        value={amount}
        InputProps={{ inputProps: { min: 1 } }}
      />
      <Unit variant="h6">{unit}</Unit>
      <Button
        variant="contained"
        color="error"
        startIcon={<AddIcon />}
        onClick={handleAddToChart}
      >
        add to cart
      </Button>
    </AddWrapper>
  );
};
