import CartContext from "../../context/CartContext";
import React from "react";
import { useContext } from "react";

const CartItem = (props) => {
  const { id, name, price, quantity, image } = props;
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container">
      <picture>
        <img src={image} alt={name} className="imgContainer" />
      </picture>
      <div className="productsCategorie">
        <h2>{name}</h2>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: {quantity * price}</p>
        <button onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
