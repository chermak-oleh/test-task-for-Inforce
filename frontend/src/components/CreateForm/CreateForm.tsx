/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../app/hooks';
import { addProductAsync, update } from '../../features/apiProductsSlice';
import { Product } from '../../types/product';

type Props = {
  editedProduct: Product | null;
};

type Values = {
  name: string,
  imageUrl: string,
  count: string | number,
  width: string | number,
  height: string | number,
  weight: string,
};

type Errors = {
  name?: string,
  imageUrl?: string,
  count?: string,
  width?: string,
  height?: string,
  weight?: string,
};

export const CreateForm: React.FC<Props> = ({ editedProduct }) => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useAppDispatch();

  const initialValues: Values = {
    name: editedProduct?.name || '',
    imageUrl: editedProduct?.imageUrl || '',
    count: editedProduct?.count || '0',
    width: editedProduct?.width || '0',
    height: editedProduct?.height || '0',
    weight: editedProduct?.weight || '',
  };

  const validate = ({
    name, imageUrl, count, width, height, weight,
  }: Values) => {
    const errors: Errors = {};

    if (!name || !name.trim()) {
      errors.name = 'Please enter a name';
    }

    if (!imageUrl || !imageUrl.trim()) {
      errors.imageUrl = 'Please provide url to image';
    }

    if (!count || !count.toString().trim()) {
      errors.count = 'Please enter a count';
    }

    if (!width || !width.toString().trim()) {
      errors.width = 'Please enter a width';
    }

    if (!height || !height.toString().trim()) {
      errors.height = 'Please enter a height';
    }

    if (!weight || !weight.trim()) {
      errors.weight = 'Please enter a height';
    }

    if (Number.isNaN(+count)) {
      errors.count = 'Count should be a number';
    }

    if (Number.isNaN(+width)) {
      errors.width = 'Width should be a number';
    }

    if (Number.isNaN(+height)) {
      errors.height = 'Height should be a number';
    }

    return errors;
  };

  const onSubmitForm = async ({
    imageUrl, name, count, width, height, weight,
  }: Values) => {
    const newProduct = {
      imageUrl: imageUrl.trim(),
      name: name.trim(),
      count: +count.toString().trim(),
      width: +width.toString().trim(),
      height: +height.toString().trim(),
      weight: weight.trim(),
    };

    if (editedProduct) {
      const productToUpdate = {
        ...newProduct,
        id: editedProduct.id,
      };

      dispatch(update(productToUpdate));

      return;
    }

    dispatch(addProductAsync(newProduct));

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
    <Form
      onSubmit={onSubmitForm}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="container">
          <div className="field">
            <label className="label">Image</label>
            <Field
              name="imageUrl"
              type="text"
              component="input"
              placeholder="Link to image"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <label className="label">Name</label>
            <Field
              name="name"
              type="text"
              component="input"
              placeholder="Product name"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <label className="label">Count</label>
            <Field
              name="count"
              type="text"
              component="input"
              placeholder="Count of product"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <label className="label">Width</label>
            <Field
              name="width"
              type="text"
              component="input"
              placeholder="Width of product"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <label className="label">Height</label>
            <Field
              name="height"
              type="text"
              component="input"
              placeholder="Height of product"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <label className="label">Weight</label>
            <Field
              name="weight"
              type="text"
              component="input"
              placeholder="Weight of product"
            >
              {({ input, meta }) => (
                <div className="control">
                  <input
                    className="input"
                    {...input}
                  />
                  {meta.error && meta.touched && <span className="has-text-danger">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>

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
      )}
    />
  );
};
