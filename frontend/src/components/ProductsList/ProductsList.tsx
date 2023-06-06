import React, { useEffect } from 'react';
import { Status } from '../../types/status';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadProductsAsync } from '../../features/apiProductsSlice';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductsList: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(store => store.apiProducts.products);
  const status = useAppSelector(store => store.apiProducts.status);

  useEffect(() => {
    dispatch(loadProductsAsync());
  }, []);

  if (status === Status.Loading) {
    return <p className="mt-3">Loading...</p>;
  }

  if (!products.length) {
    return (
      <>
        <h1 className="mt-3">
          There is no products yet.
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="columns is-multiline">
          {products.map(product => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </>
  );
});
