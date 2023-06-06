/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createProduct,
  deleteProduct,
  getAll, getAllByCount, updateProduct,
} from '../services/products';
import { Request, Response } from 'express';

export const getAllProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await getAll();

    res.send(products);
  } catch(error) {
    global.console.log(error);
  }
  
};

export const getAllProductsByCount = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const products = await getAllByCount();

  res.send(products);
};

export const addProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body;

  console.log(data);

  if (!data) {
    res.sendStatus(400);
  }

  try {
    const product = await createProduct(data);

    res.statusCode = 201;
    res.send(product);
  } catch (error: any) {
    global.console.log(error.message);
  }
};

export const update = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body;

  if (!data) {
    res.sendStatus(400);
  }

  try {
    const product = await updateProduct(data);

    res.statusCode = 201;
    res.send(product);
  } catch (error: any) {
    global.console.log(error.message);
  }
};

export const removeProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = req.body;


  if (!data) {
    res.sendStatus(400);
  }

  try {
    const productToDelete = await deleteProduct(data);

    res.statusCode = 204;
    res.send(productToDelete);
  } catch (error: any) {
    global.console.log(error.message);
  }
};
  