import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //setCart([...cart, product]);
  
    if (cart.find((p)=>(p.id === product.id))) { //if the product si already on the cart, we add 1 item
      setCart( cart.map((p) => (p.id === product.id ? {...p, quantity: p.quantity + 1} : p)));
    } else { //if not, we create another
      setCart([...cart, { ...product, quantity: 1 }]);
    }    
  };
  
  const removeItem = (product) => {
    if (product.quantity>1){
      setCart(cart.map((p) => (p.id === product.id ? {...p, quantity: p.quantity - 1} : p)));
    }
    else {
      setCart(cart.filter((p) => p.id !== product.id)); //it let pass all the prodcuts that are not the one we want to delete
    }

  }


  return (
    <div className="App">
      <Header />

      <main className="main-layout">
        <section className="product-section">
          <ProductList onAdd={addToCart}/>
        </section>
        <aside className="cart-section">
          <Cart cart={cart} quit={removeItem} add={addToCart}/>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
