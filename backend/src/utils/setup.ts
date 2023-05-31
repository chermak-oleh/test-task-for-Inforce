import { Product } from '../models/product';
import { dbInit } from './initDB';

(async () => {
  dbInit();

  await Product.sync({ alter: true });
})();
