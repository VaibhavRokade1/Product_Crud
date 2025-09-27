import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 1,
    image:
      "https://imgs.search.brave.com/YOWtDtTl__7aV436-50zX4FO0HQFVvGjFughhAcOQ-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwLzk3/L2FhLzcwOTdhYWI0/YzBiMjk1ZjQ4NDM4/NDI0OGZjM2ZlNDAy/LmpwZw",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    quantity: 2,
    image:
      "https://imgs.search.brave.com/fEUQFOOXS5GtwX_jKefaGChhWhkXVx9gxgynMSWYtfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mci5z/aG9wcGluZy5yYWt1/dGVuLmNvbS92aXN1/ZWxzLzBfU0VPL3Nh/bXN1bmdfczI1X3Vs/dHJhLmpwZw",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, value) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, value) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b last:border-b-0 hover:bg-gray-100 transition"
                >
                  <td className="py-2 px-4 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </td>
                  <td className="py-2 px-4">${item.price * item.quantity}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-right font-bold py-2 px-4">
                  Total:
                </td>
                <td className="font-bold py-2 px-4">${totalPrice}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Cart;
