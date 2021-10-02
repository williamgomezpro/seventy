import React from 'react';

// envio la prop greeting destructurada
const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;