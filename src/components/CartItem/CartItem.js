import CartContext from "../../context/CartContext";
import React from "react";
import { useContext } from "react";

const CartItem = (props) => {
  const { id, name, price, quantity, image } = props;
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container bg-white rounded-lg shadow-lg overflow-hidden flex flex-row mb-4">
      <picture className="w-1/3">
        <img src={image} alt={name} className="object-cover h-full" />
      </picture>
      <div className="productsCategorie flex flex-col justify-between p-4">
        <div>
          <h2 className="text-lg font-semibold text-pink-500">{name}</h2>
          <p className="text-sm text-gray-600">Cantidad: {quantity}</p>
          <p className="text-sm text-gray-600">Subtotal: ${quantity * price}</p>
        </div>
        <button 
          onClick={() => removeItem(id)}
          className="px-4 py-2 bg-pink-500 text-white text-xs font-semibold rounded hover:bg-pink-600 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
