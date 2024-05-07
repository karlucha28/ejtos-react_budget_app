import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: name, cost: 10 }
        });
    };

    const decreaseAllocation = (name) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: name, cost: 10 }
        });
    };

    // Styles for the increase and decrease buttons
    const buttonStyle = {
        borderRadius: '50%',       
        color: 'white',        
        fontWeight: 'bold',        
        width: '35px',             
        height: '35px',            
        border: 'none',            
        display: 'flex',           
        alignItems: 'center',      // Centers content vertically
        justifyContent: 'center',  // Centers content horizontally
        padding: '5px',            // Adds padding uniformly around the content
        cursor: 'pointer',
                 
    };

    const symbolStylePlus = {
        fontSize: '50px', // Increase the font size as needed
        transform: 'translateY(-7%)', // Adjust this percentage to center the symbol vertically
        
    };

    const symbolStyleMinus = {
        fontSize: '50px', // Increase the font size as needed
        transform: 'translateY(-7%) scaleX(1.8)', // Combine vertical movement and horizontal scaling
        // display: 'inline-block'  // Allows transform to affect the span
    };

    const increaseButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green'   // Sets the background color to green for the increase button
    };

    const decreaseButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red'     // Sets the background color to red for the decrease button
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button style={increaseButtonStyle} onClick={event=> increaseAllocation(props.name)}>
                <span style={symbolStylePlus}>+</span>
            </button>
        </td>
        <td>
            <button style={decreaseButtonStyle} onClick={() => decreaseAllocation(props.name)}>
                <span style={symbolStyleMinus}>-</span>
            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
