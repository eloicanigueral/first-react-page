import ProductCard from './ProductCard';
import products from '../data/products.json';

function ProductList({ onAdd }) {
  products.sort((a,b)=>a.name.localeCompare(b.name));
  return (
    <div className="available-products">
      <h2>Productes Disponibles</h2>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

