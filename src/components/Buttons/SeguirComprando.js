import React from "react";
import "./SeguirComprando.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const SeguirComprando = ({
  ancho,
  largo,
  radius,
  backgroud,
  fontSize,
  color,
}) => {
  return (
    <>
      <Link to="/">
        <button
          className="SeguirComprando"
          style={{
            width: ancho,
            height: largo,
            borderRadius: radius,
            backgroundColor: backgroud,
            fontSize: fontSize,
            color: color,
          }}
        >
          <FontAwesomeIcon icon="hand-point-right" /> Seguir comprando
        </button>
      </Link>
    </>
  );
};

export default SeguirComprando;
