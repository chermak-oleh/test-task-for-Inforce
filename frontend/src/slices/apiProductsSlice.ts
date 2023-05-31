/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createProduct, getApiProducts, getApiProductsByCount, removeProduct, updateProduct,
} from '../api/getApiData';
import { RootState } from '../store/store';
import { Status } from '../types/Status';
import { Product } from '../types/product';
import { NewProduct } from '../types/NewProduct';

export interface State {
  products: Product[],
  status: Status;
}

const initialState: State = {
  products: [],
  status: Status.Loading,
};

export const loadProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const loadedProducts: Product[] = await getApiProducts();

    return loadedProducts;
  },
);

export const loadProductsByCount = createAsyncThunk(
  'products/fetchProductsCount',
  async () => {
    const loadedProducts: Product[] = await getApiProductsByCount();

    return loadedProducts;
  },
);

export const addProductAsync = createAsyncThunk(
  'products/addProduct',
  async (product: NewProduct) => {
    const createdProduct: Product = await createProduct(product);

    return createdProduct;
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (product: Product) => {
    // eslint-disable-next-line no-console
    console.log(product.id);
    await removeProduct(product);

    return product.id;
  },
);

export const update = createAsyncThunk(
  'products/updateProduct',
  async (product: Product) => {
    const productToUpdate: Product = await updateProduct(product);

    return productToUpdate;
  },
);

export const productsSlice = createSlice({
  name: 'apiProducts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(loadProductsAsync.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.products = action.payload;
      })
      .addCase(loadProductsAsync.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(loadProductsByCount.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(loadProductsByCount.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.products = action.payload;
      })
      .addCase(loadProductsByCount.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.products = [...state.products, action.payload];
      })
      .addCase(addProductAsync.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.products = state.products.filter(product => product.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(update.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.products = state.products.map(product => {
          if (product.id === action.payload.id) {
            return action.payload;
          }

          return product;
        });
      })
      .addCase(update.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.apiProducts.products;
