import { NewProduct } from '../types/NewProduct';
import { Product } from '../types/product';
import { client } from '../utils/fetchClient';

export const getApiProducts = (): Promise<Product[]> => {
  return client.get('');
};

export const getApiProductsByCount = (): Promise<Product[]> => {
  return client.get('/count');
};

export const createProduct = (product: NewProduct) => {
  return client.post<Product>('', product);
};

export const updateProduct = (product: Product) => {
  return client.patch<Product>('', product);
};

export const removeProduct = (product: Product) => {
  return client.delete('', product);
};
