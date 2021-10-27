import React from 'react';
import './CartWidget.css';

// iconos de font awesomw a usar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
    return (
        <div className="cart">
            <FontAwesomeIcon icon="shopping-cart"/>
        </div>
    );
};

export default CartWidget;