import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MAIN_URLS } from 'util/routes/urls';

import { App } from 'App';
import { ProductPage } from 'pages/product-page/ProductPage';

export const Router = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path={MAIN_URLS.ROOT} element={<ProductPage />} />
      </Route>
      <Route path="*" element={<Navigate to={MAIN_URLS.ROOT} />} />
    </Routes>
  );
};
