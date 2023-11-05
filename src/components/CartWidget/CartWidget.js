import cart from "./assets/cart.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className={`relative inline-flex items-center justify-center p-2 rounded-full text-white transition-all duration-200 ease-in-out ${totalQuantity > 0 ? 'bg-pink-600 hover:bg-pink-700' : 'hidden'} `}
    >
      <img className="w-8 h-8" src={cart} alt="Carrito" />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
