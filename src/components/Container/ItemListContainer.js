import React from 'react';
import ItemCount from './ItemCount';

// envio la prop greeting destructurada
const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock='5' initial='1' />
        </div>
    );
}

export default ItemListContainer;