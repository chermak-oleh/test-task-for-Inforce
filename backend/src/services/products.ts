import { Product } from '../models/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll({
    order: [['name', 'ASC']],
  });

  return products;
};

export const getAllByCount = async (): Promise<ProductType[]> => {
  const products = await Product.findAll({
    order: [['count', 'DESC']],
  });

  return products;
};

export const createProduct = async (
  data: ProductType): Promise<ProductType> => {
  const product = await Product.create({
    ...data,
  });

  return product;
};

export const updateProduct = async (
  data: ProductType): Promise<ProductType> => {
  await Product.update(
    { ...data },
    { where: { id: data.id } },
  );
  
  return data;
};

export const deleteProduct = async (data: ProductType) => {
  await Product.destroy(
    { where: { id: data.id } },
  );

  return data;
};
