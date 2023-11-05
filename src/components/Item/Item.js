import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, stock }) => {
  return (
    <article className="flex flex-col bg-pink-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <header className="p-5 text-center">
        <h2 className="text-lg text-pink-600 font-semibold">{name}</h2>
      </header>
      <picture className="flex-grow">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </picture>
      <section className="p-5">
        <p className="text-sm text-pink-500">Precio: <span className="font-semibold">${price}</span></p>
        <p className="text-sm text-pink-500">Stock disponible: <span className="font-semibold">{stock}</span></p>
      </section>
      <footer className="p-5 text-center">
        <Link to={`/item/${id}`} className="text-white bg-pink-500 hover:bg-pink-400 rounded-full px-4 py-2 transition-colors duration-300">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
