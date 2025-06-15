import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    const newQty = parseInt(quantity);
    if (!isNaN(newQty) && newQty > 0) {
      dispatch(updateQuantity({ id, quantity: newQty }));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="form-control form-control-sm"
                    onChange={e => handleQuantityChange(item.id, e.target.value)}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end"><strong>Total:</strong></td>
              <td colSpan="2"><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
