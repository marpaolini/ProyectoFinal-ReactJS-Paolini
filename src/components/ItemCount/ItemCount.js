import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='flex flex-col items-center bg-pink-50 p-4 rounded-lg shadow'>
      <div className='flex items-center mb-4'>
        <button
          className='text-pink-600 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800'
          onClick={decrement}
        >
          -
        </button>
        <h4 className='font-semibold text-xl text-pink-600 mx-4'>{quantity}</h4>
        <button
          className='text-pink-600 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 ml-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800'
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className='text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800'
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

