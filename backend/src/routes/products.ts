import express from 'express';
import { 
  addProduct, 
  getAllProducts, 
  getAllProductsByCount, 
  removeProduct, 
  update } from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/count', getAllProductsByCount);

productRouter.post('/', addProduct);
productRouter.patch('/', update);
productRouter.delete('/', removeProduct);

