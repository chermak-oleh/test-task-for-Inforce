import { NewProduct } from '../types/newProduct';
import { Product } from '../types/product';
import { client } from '../utils/fetchClient';

export const getApiProducts = (): Promise<Product[]> => {
  return client.get('');
};

export const getApiProductsByCount = (): Promise<Product[]> => {
  return client.get('/count');
};

export const createProduct = (product: NewProduct): Promise<Product> => {
  return client.post<Product>('', product);
};

export const updateProduct = (product: Product): Promise<Product> => {
  return client.patch<Product>('', product);
};

export const removeProduct = (product: Product): Promise<Product> => {
  return client.delete<Product>('', product);
};
