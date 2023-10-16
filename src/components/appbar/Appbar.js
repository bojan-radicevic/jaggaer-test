import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { selectCart, selectArticle, selectUser } from 'store/data/dataSelector';

import { AppbarIcons } from 'components/appbar/AppbarIcons';
import { ElevationScroll } from 'components/appbar/ElevationScroll';

const AppBarContainer = styled(AppBar)({
  backgroundColor: '#fff',
  borderBottom: '1px solid #E9E9E9'
});

const OffsetHelper = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Appbar = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const article = useSelector(selectArticle);
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && article) {
      setIsFavorite(user.favorite_articles.includes(article.id));
    }
  }, [cart, user]);

  return (
    <>
      <ElevationScroll>
        <AppBarContainer>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  color="error"
                  sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }
                  }}
                >
                  {article?.title}
                </Typography>
              </Grid>
              <AppbarIcons
                items={cart?.items}
                isFavorite={isFavorite}
                unit={article?.unit}
              />
            </Grid>
          </Toolbar>
        </AppBarContainer>
      </ElevationScroll>
      <OffsetHelper />
    </>
  );
};
