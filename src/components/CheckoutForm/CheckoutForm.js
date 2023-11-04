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
    <div className="container mx-auto p-6 bg-gray-100 rounded shadow-md max-w-md">
      <form onSubmit={handleConfirm} className="space-y-4">
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-700 font-semibold" htmlFor="name">Nombre</label>
          <input
            className="border p-2 rounded"
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-700 font-semibold" htmlFor="phone">Teléfono</label>
          <input
            className="border p-2 rounded"
            type="text"
            id="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-700 font-semibold" htmlFor="email">Email</label>
          <input
            className="border p-2 rounded"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <button type="submit" className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-200 active:bg-indigo-800">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
