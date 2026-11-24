
function Cart( props ) {
  const total = props.cart.reduce((sum, item) => sum + item.price*item.quantity, 0);

  return (
    <div>
      <h2>Cistella</h2>
      {props.cart.length === 0 ? (
        <p>No hi ha productes a la cistella.</p>
      ) : (
        <ul>
          {props.cart.map((item, index) => (
            <li key={index}>
              {item.quantity}x {item.name} - {item.price} €
              <span> </span>
              <button onClick={()=>props.quit(item)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total:</strong> {total} €</p>
    </div>
  );
}

export default Cart;
