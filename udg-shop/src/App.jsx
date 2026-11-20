
import { useState } from 'react';
import './App.css';
import productes from './data/products.json';

function Header() {
  return (
    <div className="Cap">
      <h1>Welcome to the Shop UdG</h1>
    </div>
  );
}

function ProductList(props) {
  return (
    <div className="PL">
      <h3>Productes</h3>

      {productes.map((p) => (
        <ProductCard
          key={p.id}
          props={{ p: p, a: props.a }}
        />
      ))}
    </div>
  );
}

function ProductCard({ props }) {
  return (
    <div className="cart">
      <h4>{props.p.name}</h4>
      <p>{props.p.price} €</p>

      <button onClick={() => { props.a(props.p) }}>
        Afegir al carretó
      </button>
    </div>
  );
}

function Cart(props) {
  return (
    <div className="cistella">
      <h3>Cistella</h3>

      {props.cart.map((elem) => (
        <p> {elem.name} - {elem.price} €</p>
      ))}

      <p> Total {props.cart.reduce( (sum, elem) => sum + elem.price, 0)} €</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="Peu">
      <p>© Shop UdG</p>
    </div>
  );
}

function App() {
  const [cart, updateCart] = useState([]);

  const addProduct = (p) => {
    updateCart([...cart, p]);
  };

  return (
    <div className="App">
      <Header />

      <div className="contingut">
        <ProductList a={addProduct} />
        <Cart cart={cart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
