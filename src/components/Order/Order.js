import React, {useContext} from "react";
import {CartContext} from "../../Contexts/CartContext";
import {db} from "../../firebase";
import {collection, addDoc, writeBatch, doc} from "firebase/firestore";
import "./Order.css";

// formulario y validaciones
import {useFormik} from "formik";
import * as Yup from "yup";

// componentes a usar
import OrderSummary from "../OrderSummary/OrderSummary";
import {ButtonIconSm, ButtonIconSmDifferent} from "../Buttons/Buttons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Order = ({hadleIdOrder}) => {
  // uso de contexto del carrito
  const {productsCart, clearCart, toPay} = useContext(CartContext);

  // para actualizar lotes de documentos
  const batch = writeBatch(db);

  // campo fecha para ser guardado en la orden
  const date = new Date();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      emailRepeat: "",
    },
    onSubmit: (data) => {
      const order = {
        buyer: {
          name: data.name,
          lastname: data.lastname,
          phone: data.phone,
          email: data.email,
        },
        items: productsCart,
        date: date,
        total: toPay,
      };
      orderGenerator(order);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      phone: Yup.string().required("Requerido"),
      lastname: Yup.string().required("Requerido"),
      email: Yup.string()
        .required("Requerido")
        .email("Email Invalido")
        .oneOf([Yup.ref("emailRepeat")], "Email no coincide"),
      emailRepeat: Yup.string()
        .required("Requerido")
        .email("Email Invalido")
        .oneOf([Yup.ref("email")], "Email no coincide"),
    }),
  });

  // evento que genera la orden y actualiza el stock de los productos
  const orderGenerator = (order) => {
    // expresión funcional que genera el documento dentro de la colección order en firebase
    const docOrder = async () => {
      try {
        const docRef = await addDoc(collection(db, "order"), order);
        hadleIdOrder(`Orden generada con el ID de seguimiento: ${docRef.id}`);
      } catch (error) {
        console.log(error.message);
      }
    };
    docOrder();

    // expresión funcional que actualiza el stock en cada uno de los documentos de la colección de product en firebase
    const stockUpdate = async () => {
      try {
        productsCart.forEach((element) => {
          const docProduct = doc(db, "product", element.id);
          batch.update(docProduct, {
            stock: element.stock - element.quantity,
          });
        });
        await batch.commit();
      } catch (error) {
        console.log(error.message);
      }
    };
    stockUpdate() && clearCart();
  };

  return (
    <>
      <div className="col__left">
        <div className="heading">
          <FontAwesomeIcon icon="id-card" /> Datos de Contacto
        </div>
        <div className="order__form">
          <form onSubmit={formik.handleSubmit}>
            <div className="field">
              <label>
                Nombre
                {formik.errors.name && <span> {formik.errors.name}</span>}
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className="field__indicator"></div>
            </div>

            <div className="field">
              <label>
                Apellido{" "}
                {formik.errors.lastname && (
                  <span style={{border: "1 solid red"}}>
                    {formik.errors.lastname}
                  </span>
                )}
              </label>
              <input
                type="text"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              <div className="field__indicator"></div>
            </div>

            <div className="field">
              <label>
                Teléfono{" "}
                {formik.errors.phone && <span>{formik.errors.phone}</span>}
              </label>
              <input
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <div className="field__indicator"></div>
            </div>

            <div className="field">
              <label>
                E-Mail{" "}
                {formik.errors.email && <span>{formik.errors.email}</span>}
              </label>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="field__indicator"></div>
            </div>

            <div className="field">
              <label>
                Repetir E-Mail{" "}
                {formik.errors.emailRepeat && (
                  <span>{formik.errors.emailRepeat}</span>
                )}
              </label>
              <input
                type="text"
                name="emailRepeat"
                onChange={formik.handleChange}
                value={formik.values.emailRepeat}
              />
              <div className="field__indicator"></div>
            </div>
            <div className="button__order">
              <ButtonIconSmDifferent
                text="Enviar Orden"
                event={formik.handleSubmit}
                icon="share"
                type="submit"
              />
              <ButtonIconSm
                text="Limpiar campos"
                event={formik.handleReset}
                icon="eraser"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="col__right">
        <div className="heading">
          <FontAwesomeIcon icon="shopping-basket" /> Resumen de Compra
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Order;
