import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    console.log("Categoría: ", categoryId)
    const fetchProducts = async () => {
      setLoading(true);
      const collectionRef = collection(db, "items");
      let q;

      if (categoryId) {
        q = query(collectionRef, where("category", "==", categoryId));
      } else {
        q = collectionRef;
      }

      try {
        const querySnapshot = await getDocs(q);
        const docsFromFirebase = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(docsFromFirebase);
        setProducts(docsFromFirebase);
      } catch (error) {
        console.error("Error al obtener los documentos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center text-pink-600 font-bold mb-8">
        {greeting || 'Bienvenidos a mi tienda'}
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
