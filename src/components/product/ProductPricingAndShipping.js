import React from 'react';
import styled from '@emotion/styled';
import {
  Grid,
  Box,
  Divider,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';

import { Title } from 'components/ui/Title';
import { BulletList } from 'components/ui/BulletList';

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
      <TableContainer
        sx={{
          display: 'flex',
          borderTop: '1px solid #E0E0E0',
          borderBottom: '1px solid #E0E0E0',
          width: 'fit-content',
          padding: 0
        }}
      >
        <Table>
          <TableBody>
            {Object.entries(article?.price_breaks).map(([key, val]) => (
              <TableRow
                key={key}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& td': { padding: '4px 16px 4px 4px' }
                }}
              >
                <TableCell align="right">{`ex ${key} ${article.unit} `}</TableCell>
                <TableCell align="left">{`${(article.price - val) / key} ${
                  article.currency
                }/${article.unit}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Wrapper>
);
