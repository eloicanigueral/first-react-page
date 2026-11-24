
function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
      <button onClick={() => onAdd(product)}>Afegir a la cistella</button>
    </div>
  );
}

export default ProductCard;
