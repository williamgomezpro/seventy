import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <section className="text-hero">
        <h3>Potencia tu Estilo al 100%</h3>
        <h4>Zapatos para Hombres</h4>
      </section>
      <div className="wave" style={{height: 150, overflow: "hidden"}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{height: "100%", width: "100%"}}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{stroke: "none", fill: "whitesmoke"}}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
