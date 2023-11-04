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
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <img src={image} alt={name} className="w-full h-auto mb-4" />
      <p className="text-gray-600 mb-4">Category: {category}</p>
      <p className="text-gray-600 mb-4">Description: {description}</p>
      <p className="text-2xl text-indigo-600 font-semibold mb-4">Price: ${price}</p>
      <div className="flex items-center justify-between">
        {quantityAdded > 0 ? (
          <Link
            to="/cart"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Finish Purchase
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
