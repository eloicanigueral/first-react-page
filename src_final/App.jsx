import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Header />

      <main className="main-layout">
        <section className="product-section">
          <ProductList onAdd={addToCart} />
        </section>
        <aside className="cart-section">
          <Cart cart={cart} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
