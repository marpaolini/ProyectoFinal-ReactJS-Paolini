import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="text-center">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="text-pink-500 hover:text-pink-600 font-bold py-2 px-4 rounded">
          Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3 className="text-pink-500 text-xl font-bold my-4">Total: ${total}</h3>
      <div className="inline-block">
        <button onClick={() => clearCart()} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-l shadow-lg mr-4">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-r shadow-lg">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;


