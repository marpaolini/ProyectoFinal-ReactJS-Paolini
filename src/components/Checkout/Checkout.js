import { useState, useContext } from "react";
import {
  writeBatch,
  collection,
  getDocs,
  query,
  where,
  documentId,
  addDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase/firebaseConfig";
import CartContext from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [outOfStockItems, setOutOfStockItems] = useState([]);

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const batch = writeBatch(db);
      const productsRef = collection(db, "items");
      const ids = cart.map((prod) => prod.id);

      const productsFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const outOfStock = [];

      productsFromFirestore.docs.forEach((doc) => {
        const dataDoc = doc.data();
        const productInCart = cart.find((prod) => prod.id === doc.id);
        
        if (dataDoc.stock >= productInCart.quantity) {
          batch.update(doc.ref, { stock: dataDoc.stock - productInCart.quantity });
        } else {
          outOfStock.push({ ...dataDoc, id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        const orderRef = collection(db, "orders");
        const objOrder = {
          buyer: { name, phone, email },
          items: cart,
          total,
          date: new Date(),
        };

        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos fuera de stock");
        setOutOfStockItems(outOfStock);
      }

    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      {orderId ? (
        <div>
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: {orderId}</p>
        </div>
      ) : (
        <>
          {outOfStockItems.length > 0 && (
            <div>
              <h2>Los siguientes productos están agotados:</h2>
              <ul>
                {outOfStockItems.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <CheckoutForm onConfirm={createOrder} />
        </>
      )}
    </div>
  );
};

export default Checkout;
