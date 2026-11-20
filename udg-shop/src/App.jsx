import { useState } from 'react';
import './App.css';

function Header (){
  return (
    <div className="Cap">
      <h1>Header One</h1>
    </div>
  );
}

function ProductList (){
  return (
    <div className="PL">
      <ProductCard/>
    </div>
  );
}

function ProductCard (){
  return (
    <div className="cart">
      <p>Samarreta</p>
      <p>€ 20</p>
      <p>Samarreta</p>
    </div>
  );
}

function Cart (){
  return (
    <div className="PL">
      <p>Samarreta</p>
      <p>Samarreta</p>
      <p>Samarreta</p>
    </div>
  );
}

function Footer (){
  return (
    <div className="Peu">
      <p>(c)</p>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Header/>

      <ProductList/>

      <Cart/>

      <Footer/>
    </div>
  );
}

export default App;

