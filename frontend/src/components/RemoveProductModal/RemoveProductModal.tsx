import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteProduct } from '../../features/apiProductsSlice';
import { Product } from '../../types/product';

type Props = {
  onCloseModal: () => void;
  product: Product;
};

export const RemoveProductModal: React.FC<Props> = ({ onCloseModal, product }) => {
  const dispatch = useAppDispatch();

  const onDeleteButton = () => {
    dispatch(deleteProduct(product));
    onCloseModal();
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Remove Product</p>
          <button className="delete" aria-label="close" type="button" onClick={onCloseModal}></button>
        </header>
        <section className="modal-card-body">
          <h1 className="title has-text-danger">Are you sure you want to delete this product?</h1>
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-danger" type="button" onClick={onDeleteButton}>Delete</button>
            <button className="button" type="button" onClick={onCloseModal}>Cancel</button>
          </div>
        </footer>
      </div>
    </div>
  );
};
