import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container--col col-one">
          <h4>Redes Sociales</h4>
          <p>Infórmate de lo último. en nuestras redes sociales</p>
          <div className="footer__container--redes">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </div>
        </div>
        <div className="footer__container--col col-two">
          <h4>Venta / Asesorías</h4>
          <p>Horarios de atención Lunes a Viernes 9:00 - 17:00 hrs</p>
          <div className="footer__container--ws">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            <p>+56 9 41410718</p>
          </div>
        </div>
        <div className="footer__container--col col-three">
          <h4>Post Venta</h4>
          <p>Horarios de atención Lunes a Viernes 9:00 - 17:00 hrs</p>
          <div className="footer__container--ws">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            <p>+56 9 45678919</p>
          </div>
        </div>
      </div>
      <h2 className="footer__container--title">
        Copyright © 2021{" "}
        <a href="https://github.com/williamgomezpro/seventy">William Gómez</a>,
        todos los derechos reservados.
      </h2>
    </footer>
  );
};

export default Footer;
