import React, { useState } from 'react';
import { Product } from '../../types/product';
import { RemoveProductModal } from '../RemoveProductModal';
import { AddProductModal } from '../AddProductModal';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = React.memo(({
  product,
}) => {
  const {
    name, imageUrl, weight, height, count, width,
  } = product;

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const onDeleteButton = () => {
    setShowRemoveModal(true);
  };

  const onCloseModal = () => {
    setShowRemoveModal(false);
  };

  const onCloseButton = () => {
    setShowEditModal(false);
  };

  const onEditButton = () => {
    setShowEditModal(true);
  };

  return (
    <>
      {showEditModal && (
        <AddProductModal onCloseButton={onCloseButton} product={product} />
      )}
      {showRemoveModal && (
        <RemoveProductModal onCloseModal={onCloseModal} product={product} />
      )}
      <div className="column is-4-desktop is-6-tablet is-12-mobile">
        <div className="box" style={{ maxHeight: '500px' }}>
          <img className="image" src={imageUrl} alt="Slava Ukraini!" />
          <h1 className="title">{name}</h1>
          <p>{`Count: ${count}`}</p>
          <p>{`Width: ${width}`}</p>
          <p>{`Height: ${height}`}</p>
          <p>{`Weight: ${weight}`}</p>

        </div>
        <div className="columns is-gapless is-mobile mt-3">
          <div className="column is-half">
            <button
              className="button is-success is-fullwidth is-small mr-2"
              type="button"
              onClick={onEditButton}
            >
              Edit
            </button>
          </div>
          <div className="column is-half">
            <button
              className="button is-danger is-fullwidth is-small ml-2"
              type="button"
              onClick={onDeleteButton}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
