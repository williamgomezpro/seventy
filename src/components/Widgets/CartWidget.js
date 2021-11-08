import {useContext} from "react";
import {CartContext} from "../../Contexts/CartContext";

// iconos de font awesomw a usar
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CartWidget = () => {
  const {tQuantity} = useContext(CartContext);
  return (
    <>
      <FontAwesomeIcon icon="shopping-cart" />
      {tQuantity > 0 && <><div className="quantity">{tQuantity}</div></>}
    </>
  );
};

export default CartWidget;
