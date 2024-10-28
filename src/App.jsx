import React, {useState} from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart'; 
import Navbar from './Components/Navbar';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={() => setModalOpen(true)} />
      <ProductList onAddToCart={handleAddToCart} />
      {isModalOpen && (
        <Cart
          cartItems={cart}
          onClose={() => setModalOpen(false)}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};


export default App;