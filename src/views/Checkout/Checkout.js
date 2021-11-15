import React, {useContext, useState, useEffect} from "react";
import {CartContext} from "../../Contexts/CartContext";
import {db} from "../../firebase";
import {
  collection,
  addDoc,
  writeBatch,
  getDocs,
  query,
  where,
  doc,
  documentId,
} from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  // uso de contexto con los productos agregados al carrito
  const {productsCart, clearCart} = useContext(CartContext);

  // este estado es basicamente para almacenar los productos y luego actualizar el stock
  const [products, setProducts] = useState([]);

  // estado para que almacena el id de la orden
  const [idOrder, setIdOrder] = useState("");
  console.log(idOrder);

  // para actualizar lotes de documentos
  const batch = writeBatch(db);

  // objeto para agragar un documento a la colección de order
  const order = {
    buyer: {
      name: "William",
      email: "william@gmail.com",
      phone: "941410178",
    },
    items: productsCart,
  };

  useEffect(() => {
    const docProducts = async () => {
      try {
        const productsRef = collection(db, "product");
        const q = query(
          productsRef,
          where(
            documentId(),
            "in",
            productsCart.map((i) => i.id)
          )
        );
        const get = await getDocs(q);
        const arrayProducts = [];
        get.forEach((element) => {
          arrayProducts.push({...element.data(), id: element.id});
        });
        setProducts(arrayProducts);
      } catch (error) {
        console.log(error.messege);
      }
    };
    docProducts();
  }, [productsCart]);

  const idDocOrder = async () => {
    const q = collection(db, "order");
    const get = await getDocs(q);
    const a = [];
    get.forEach((element) => {
      a.push({...element.data(), id: element.id});
    });
    setIdOrder(`Orden generada con el ID de seguimiento: ${a.pop().id}`);
  };

  const orderGenerator = () => {
    const docOrder = async () => {
      try {
        await addDoc(collection(db, "order"), order);
        idDocOrder();
      } catch (error) {
        console.log(error.messege);
      }
    };

    docOrder();

    const stockUpdate = async () => {
      try {
        products.forEach((element, inx) => {
          const docProduct = doc(db, "product", element.id);
          batch.update(docProduct, {
            stock: element.stock - productsCart[inx].quantity,
          });
        });
        await batch.commit();
      } catch (error) {
        console.log(error.messege);
      }
    };

    stockUpdate() && clearCart();
  };

  return (
    <div style={{marginTop: 150}}>
      {idOrder ? (
        <h2>idOrder</h2>
      ) : (
        <button onClick={orderGenerator}>Generar Orden</button>
      )}
    </div>
  );
};

export default Checkout;
