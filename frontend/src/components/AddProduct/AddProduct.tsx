import React, { useState } from 'react';
import { AddProductModal } from '../AddProductModal';

export const AddProduct: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const onAddButton = () => {
    setShowAddModal(true);
  };

  const onCloseButton = () => {
    setShowAddModal(false);
  };

  return (
    <>
      {showAddModal && (
        <AddProductModal onCloseButton={onCloseButton} product={null} />
      )}
      <button className="button is-info ml-4" type="button" onClick={onAddButton}>Add Product</button>

    </>
  );
};
