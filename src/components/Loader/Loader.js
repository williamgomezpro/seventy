import React from "react";
import "./Loader.css";

// componente font awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// si se quiere cambiar el estilo del loader
// <FontAwesomeIcon icon="circle-notch" pulse size="lg"/>

const Loader = ({padding}) => {
  return (
    <div className="loader" style={{padding: padding}}>
      <FontAwesomeIcon icon="spinner" pulse size="lg" />
    </div>
  );
};

export default Loader;
