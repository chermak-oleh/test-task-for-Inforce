import React from 'react';
import { CreateForm } from '../CreateForm';
import { Product } from '../../types/product';

type Props = {
  onCloseButton: () => void;
  product: Product | null;
};

export const AddProductModal: React.FC<Props> = ({ onCloseButton, product }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create Product</p>
          <button className="delete" aria-label="close" type="button" onClick={onCloseButton}></button>
        </header>
        <section className="modal-card-body">
          <CreateForm editedProduct={product} />
        </section>
        <footer className="modal-card-foot">
        </footer>
      </div>
    </div>
  );
};
