/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch } from '../../app/hooks';
import { addProductAsync, update } from '../../features/apiProductsSlice';
import { Product } from '../../types/product';

type Props = {
  editedProduct: Product | null;
};

export const CreateForm: React.FC<Props> = ({ editedProduct }) => {
  const [error, setError] = useState(false);
  const [name, setName] = useState(editedProduct?.name || '');
  const [url, setUrl] = useState(editedProduct?.imageUrl || '');
  const [count, setCount] = useState(editedProduct?.count || '0');
  const [width, setWidth] = useState(editedProduct?.width || '0');
  const [height, setHeight] = useState(editedProduct?.height || '0');
  const [weight, setWeight] = useState(editedProduct?.weight || '');
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useAppDispatch();

  const addNewProduct = () => {
    const trimmedUrl = url.trim();
    const trimmedName = name.trim();
    const trimmedWeight = weight.trim();

    const newProduct = {
      imageUrl: trimmedUrl,
      name: trimmedName,
      count: +count,
      width: +width,
      height: +height,
      weight: trimmedWeight,
    };

    if (editedProduct) {
      const productToEdit = {
        ...newProduct,
        id: editedProduct.id,
      };

      dispatch(update(productToEdit));

      return;
    }

    dispatch(addProductAsync(newProduct));
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setUrl(value);
  };

  const onCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCount(value);
  };

  const onWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setWidth(value);
  };

  const onHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setHeight(value);
  };

  const onWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setWeight(value);
  };

  const clearForm = () => {
    setUrl('');
    setName('');
    setCount('0');
    setWidth('0');
    setHeight('0');
    setWeight('');
    setError(false);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!url || !name || !count || !weight || !width || !height) {
      setError(true);

      return;
    }

    if (Number.isNaN(+count) || Number.isNaN(+width) || Number.isNaN(+height)) {
      setError(true);

      return;
    }

    addNewProduct();
    clearForm();
    setShowNotification(true);
  };

  const onCloseNotification = () => {
    setShowNotification(false);
  };

  if (showNotification) {
    return (
      <div className="notification is-success">
        <button className="delete" type="button" onClick={onCloseNotification}></button>
        <p>{editedProduct ? 'Product updated successfully' : 'Product created successfully'}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmitForm} className="container">
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Link to image"
            value={url}
            onChange={onUrlChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Product name"
            value={name}
            onChange={onNameChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Count</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Count of product"
            value={count}
            onChange={onCountChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Width</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Width of product"
            value={width}
            onChange={onWidthChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Height</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Height of product"
            value={height}
            onChange={onHeightChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Weight</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Weight of product"
            value={weight}
            onChange={onWeightChange}
            required
          />
        </div>
      </div>

      {error && (
        <span className="has-text-danger">Please fill in all required fields with valid data</span>
      )}

      <button
        className={classNames(
          'button',
          { 'is-info': !editedProduct },
          { 'is-success': editedProduct },
        )}
        type="submit"
      >
        {editedProduct ? 'Update Product' : 'Add Product'}

      </button>
    </form>
  );
};
