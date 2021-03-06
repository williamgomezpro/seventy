import React from "react";

// se importa el componente contenedor del detalle
import ItemDetailContainer from "../../components/Container/ItemDetailContainer/ItemDetailContainer";

const Detalle = ({match}) => {
  // asigno a una const el valor de "macth" que es un objeto que tiene como propiedad el id enviado por Url
  let idItem = match.params.id;
  return (
    <>
      <ItemDetailContainer idItem={idItem} />
    </>
  );
};

export default Detalle;
