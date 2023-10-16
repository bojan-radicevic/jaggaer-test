import { createSelector } from '@reduxjs/toolkit';

const selectArticle = createSelector(
  state => state.data,
  data => data.article
);

const selectCart = createSelector(
  state => state.data,
  data => data.cart
);

const selectUser = createSelector(
  state => state.data,
  data => data.user
);

const selectDataStatus = createSelector(
  state => state.data,
  data => data.status
);

const selectHasError = createSelector(
  state => state.data,
  data => data.hasError
);

const selectIsAddToCartVisible = createSelector(
  state => state.data,
  data => data.isAddToCartVisible
);

export {
  selectArticle,
  selectCart,
  selectUser,
  selectDataStatus,
  selectHasError,
  selectIsAddToCartVisible
};
