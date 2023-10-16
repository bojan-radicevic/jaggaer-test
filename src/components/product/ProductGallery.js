import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Grid, SvgIcon, Modal, Box } from '@mui/material';

import Zoom from 'assets/icons/zoom-in.svg';

const ContentWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  }
}));

const SmallImage = styled('img')({
  maxWidth: 100,
  width: 100,
  height: 'auto',
  padding: 30,
  border: '1px solid #E9E9E9'
});

const SmallImageContainer = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row'
  }
}));

const BigImage = styled('img')({
  height: 'auto',
  width: 400,
  maxWidth: '100%',
  padding: 100,
  border: '1px solid #E9E9E9'
});

const ZoomIcon = () => (
  <SvgIcon>
    <Zoom />
  </SvgIcon>
);

const BigImageWrapper = styled(Grid)({
  position: 'relative',
  maxWidth: '100%',
  '& svg': {
    position: 'absolute',
    bottom: '16px',
    right: '12px'
  }
});

export const ProductGallery = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ContentWrapper container spacing={2}>
        <Grid item>
          <SmallImageContainer container spacing={2}>
            <Grid item>
              <SmallImage src={'assets/icons/package.svg'} />
            </Grid>
            <Grid item>
              <SmallImage src={'assets/icons/package.svg'} />
            </Grid>
          </SmallImageContainer>
        </Grid>
        <BigImageWrapper item onClick={handleOpen}>
          <BigImage src={'assets/icons/package.svg'} />
          <ZoomIcon />
        </BigImageWrapper>
      </ContentWrapper>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper'
          }}
        >
          <BigImage src={'assets/icons/package.svg'} />
        </Box>
      </Modal>
    </>
  );
};
