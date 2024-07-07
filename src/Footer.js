import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="bg-dark text-white p-3 text-center">
            <h1>AuroraJewels</h1>
            <div>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </div>
        </header>
    );
};

export default Header;
