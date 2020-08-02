import React from 'react';
import './App.css';
import ProductCard from './ProductCard.js';

function App() {
  return (
    <div className="content-wrapper">
      <ProductCard
        title="Ultrafine Merino T-Shirt"
        price="$80.00"
        productImageSrc="shirt-1.jpg"
        starRating="4"
      />

      <ProductCard
        title="Ultrafine Merino T-Shirt"
        price="$30.00"
        productImageSrc="shirt-2.jpg"
        starRating="3"
      />

      <ProductCard
        title="Ultrafine Merino T-Shirt"
        price="$100.00"
        productImageSrc="shirt-3.jpg"
        starRating="1"
      />
    </div>
  );
}

export default App;
