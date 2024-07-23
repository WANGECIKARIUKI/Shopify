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
import Home from './Components/Home';

import './App.css';

function App() {
  return (
    <div className = "apps">
      <Navbar />

      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path = "productcard" element = {<Productcard />} />
        <Route path = "cart" element = {<Cart />} />
        <Route path = "product" element = {<Product />} />
        <Route path = "reviews" element = {<Reviews />} />
        <Route path = "reviewslist" element = {<ReviewsList />} />
        <Route path = "reviewsform" element = {<ReviewsForm />} />
        <Route path = "checkout" element = {<Checkout />} />
      </Routes>

      </div>
  );
}

export default App;
