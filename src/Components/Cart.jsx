import React from 'react';

const Cart = ({ cartItems, onClose, onRemoveFromCart }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          <ul>
            {cartItems.length > 0 ? cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title}</span>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </li>
            )) : <p className="text-center">Your cart is empty.</p>}
          </ul>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
};

export default Cart;