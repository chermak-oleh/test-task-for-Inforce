import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadProductsAsync } from '../../slices/apiProductsSlice';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductsList: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(store => store.apiProducts.products);
  const status = useAppSelector(store => store.apiProducts.status);

  useEffect(() => {
    dispatch(loadProductsAsync());
  }, []);

  if (status === 'loading') {
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
