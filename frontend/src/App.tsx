import React from 'react';
import { NavBar } from './components/NavBar';
import { ProductsList } from './components/ProductsList';
import { ProductsSort } from './components/ProductsSort';
import { AddProduct } from './components/AddProduct';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <section className="section">
        <div className="container mt-5">
          <ProductsSort />
          <AddProduct />
          <ProductsList />
        </div>
      </section>
    </>
  );
};

export default App;
