import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
      image,
    };
    addItem(item, quantity);
  };

  return (
    <div className="max-w-sm mx-auto bg-pink-50 p-6 rounded-lg shadow-md mb-5">
      <h2 className="text-3xl font-bold mb-3 text-pink-600">{name}</h2>
      <img src={image} alt={name} className="w-full h-auto mb-4 rounded" />
      <p className="text-pink-500 mb-2">Categoría: {category}</p>
      <p className="text-gray-700 mb-3">Descripción: {description}</p>
      <p className="text-2xl text-pink-500 font-semibold mb-4">Precio: ${price}</p>
      <div className="flex flex-col items-center justify-between">
        {quantityAdded > 0 ? (
          <Link
            to="/cart"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300 ease-in-out text-lg"
          >
            Finalizar compra
          </Link>
        ) : (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={(quantity) => handleOnAdd(quantity)}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

