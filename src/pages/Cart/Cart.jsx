import css from "./Cart.module.css";

export default function Cart({ products, handleRemoveProduct }) {
  return (
    <div className={css.container}>
      {products.length === 0 ? (
        <p className={css.empty}>- Your cart is empty -</p>
      ) : (
        <table className={css.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={css.image}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}$</td>
                <td>
                  <button onClick={() => handleRemoveProduct(product)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
