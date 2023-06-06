import React from 'react';
import { Product } from '../../types/product';
import { CreateForm } from '../CreateForm';

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
          <p className="modal-card-title">{product ? 'Edit Product' : 'Create Product'}</p>
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
