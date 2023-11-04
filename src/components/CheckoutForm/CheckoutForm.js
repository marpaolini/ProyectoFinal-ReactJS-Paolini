import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container p-6 mx-auto bg-white rounded shadow-md max-w-md w-full">
        <form onSubmit={handleConfirm} className="space-y-4">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 font-semibold" htmlFor="name">Nombre</label>
            <input
              className="border-2 border-pink-300 bg-pink-50 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 font-semibold" htmlFor="phone">Teléfono</label>
            <input
              className="border-2 border-pink-300 bg-pink-50 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              id="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 font-semibold" htmlFor="email">Email</label>
            <input
              className="border-2 border-pink-300 bg-pink-50 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-200 active:bg-pink-700">
              Confirmar Orden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
