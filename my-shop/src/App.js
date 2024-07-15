import React from 'react';
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
      <Product />
      <Cart />
      <Checkout />
      <Navbar />
      <Reviews />
      <ReviewsList />
      <ReviewsForm />
      <Productcard />

      </div>
  );
}

export default App;
