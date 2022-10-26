import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Product from './components/product/product.component';
import Header from './components/header/header.component';
import Favorites from './components/favorites/favorites.component';
import CardContainer from './components/card-container/card-container.component';
import './App.scss';
// Some
function App() {
  return (
    <Fragment>
      <Header />
      <Favorites />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Fragment>
  );
}

export default App;
