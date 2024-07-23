import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import ReviewsList from './Components/ReviewsList';
import ReviewsForm from './Components/ReviewsForm';
import Productcard from './Components/Productcard';

import './App.css';

function App() {
  return (
    <div className = "apps">
      <Navbar />

      <Routes>

        <Route path = "Productcard" element = {<Productcard />} />
        <Route path = "Cart" element = {<Cart />} />
        <Route path = "Product" element = {<Product />} />
        <Route path = "Reviews" element = {<Reviews />} />
        <Route path = "ReviewsList" element = {<ReviewsList />} />
        <Route path = "ReviewsForm" element = {<ReviewsForm />} />
        <Route path = "Checkout" element = {<Checkout />} />
      </Routes>

      </div>
  );
}

export default App;
