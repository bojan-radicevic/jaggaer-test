import React from 'react';
import { useSelector } from 'react-redux';

import { selectArticle } from 'store/data/dataSelector';

import { Product } from 'components/product/Product';
import { ProductDescription } from 'components/product/ProductDescription';

export const ProductPage = () => {
  const article = useSelector(selectArticle);

  return (
    <>
      <Product article={article} />
      <ProductDescription article={article} />
    </>
  );
};
