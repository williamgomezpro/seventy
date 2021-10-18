import React from 'react';

// se importa el componente con el listado principal de productos
import ItemListContainer from '../../components/Container/ItemListContainer';

const Inicio = () => {
    return (
        <div>
            <ItemListContainer title="Listado de Zapatillas" />
        </div>
    );
};

export default Inicio;