import React, { useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { fetchDataAction, resetHasError } from 'store/data/dataSlice';
import { selectDataStatus, selectHasError } from 'store/data/dataSelector';

import { STATUS, FETCHING_DATA_ERROR } from 'util/constants/defaultValues';

import { Appbar } from 'components/appbar/Appbar';
import { Loader } from 'components/loader/Loader';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const App = () => {
  const dataStatus = useSelector(selectDataStatus);
  const dataHasError = useSelector(selectHasError);
  const dispatch = useDispatch();

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(resetHasError());
  };

  useEffect(() => {
    dispatch(fetchDataAction());
  }, []);

  const LayoutContainer = styled(Container)(() => ({
    height: '100vh',
    overflow: 'hidden',
    width: '100vw'
  }));

  return (
    <>
      <LayoutContainer disableGutters={true} maxWidth={false}>
        <Appbar />
        <Container
          id="scrollContainer"
          maxWidth={false}
          sx={{
            overflow: 'auto',
            height: '100%',
            flexWrap: 'nowrap'
          }}
          disableGutters={true}
        >
          <Outlet />
        </Container>
      </LayoutContainer>
      {dataStatus === STATUS.LOADING && <Loader />}
      <Snackbar
        open={dataHasError}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ width: '100%' }}
        >
          {FETCHING_DATA_ERROR}
        </Alert>
      </Snackbar>
    </>
  );
};
