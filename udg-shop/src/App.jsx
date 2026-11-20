
import './App.css';
import productes from './data/products.json';

function Header() {
  return (
    <div className="Cap">
      <h1>Welcome to the Shop UdG</h1>
    </div>
  );
}

function ProductList() {
  return (
    <div className="PL">
      <h3>Productes Disponibles</h3>

      <div className="productes">
        {productes.map((producte) => (
          <ProductCard
            key={producte.id}
            producte={producte}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ producte }) {
  return (
    <div className="cart">
      <h4>{producte.name}</h4>
      <p>{producte.price} €</p>
      <button>Afegir al carretó</button>
    </div>
  );
}

function Cart() {
  return (
    <div className="cistella">
      <h3>Cistella</h3>
    </div>
  );
}

function Footer() {
  return (
    <div className="Peu">
      <p>© 2025 Shop UdG</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <div className="contingut">
        <ProductList />
        <Cart />
      </div>

      <Footer />
    </div>
  );
}

export default App;
