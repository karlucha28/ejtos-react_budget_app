import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const currencies = [
        { symbol: '$', name: 'Dollar', display: 'Currency ($ Dollar)' },
        { symbol: '£', name: 'Pound', display: 'Currency (£ Pound)' },
        { symbol: '€', name: 'Euro', display: 'Currency (€ Euro)' },
        { symbol: '₹', name: 'Rupee', display: 'Currency (₹ Rupee)' }
    ];

    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency  // passing the entire currency object
        });
        setDropdownOpen(false);  // Close the dropdown
    };

    return (
        <div className="btn-group">
    <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        style={{
            backgroundColor: 'lightgreen',
            border: 'none'  // Removes the default border
        }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
    >
        {selectedCurrency.display}
    </button>
    <div
        className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
        style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: 'lightgreen',
            border: '2px solid green',  // Adds a green border around the dropdown
            borderRadius: '0.25rem'  // Optional: Adds slight rounding to the corners
        }}
    >
        {currencies.map(currency => (
            <button key={currency.name} className="dropdown-item" onClick={() => handleCurrencyChange(currency)}>
                {`${currency.symbol} ${currency.name}`}
            </button>
        ))}
    </div>
</div>
    );
};

export default CurrencyDropdown;