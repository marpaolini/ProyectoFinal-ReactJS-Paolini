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
    if (db) {
      console.log(db);
      const collectionRef = collection(db, "items");
      const q = categoryId
        ? query(collectionRef, where("category", "==", categoryId))
        : collectionRef;
      getDocs(q)
        .then((response) => {
          const docsFromFirebase = response.docs;
          setProducts(
            docsFromFirebase?.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        })
        .catch((e) => {});
    }
  }, [categoryId]);

  return (
    <div className="Title-S">
      <h1 className="Title">esta es mi tienda </h1>
      <section className="TitleContainer">
        <ItemList products={products} />
      </section>
    </div>
  );
};

export default ItemListContainer;
