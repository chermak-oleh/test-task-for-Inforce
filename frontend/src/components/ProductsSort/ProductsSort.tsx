/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Order } from '../../types/order';
import { useAppDispatch } from '../../app/hooks';
import { loadProductsAsync, loadProductsByCount } from '../../features/apiProductsSlice';

export const ProductsSort: React.FC = () => {
  const [order, setOrder] = useState('Alphabetically');
  const dispatch = useAppDispatch();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (value === 'Count') {
      dispatch(loadProductsByCount());
    }

    if (value === 'Alphabetically') {
      dispatch(loadProductsAsync());
    }

    setOrder(value);
  };

  return (
    <div className="select is-info">
      <select value={order} onChange={handleSelectChange}>
        <option value={Order.Alphabet}>Alphabetically</option>
        <option value={Order.Count}>Count</option>
      </select>
    </div>
  );
};
