import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const inputBudget = parseFloat(event.target.value);
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.cost, 0);
        console.log(`totalExpenses: ${totalExpenses}`);
        // Check if the new budget is valid before updating the state
        if (inputBudget > 20000) {
            alert("The budget cannot exceed £20,000");
            setNewBudget(budget);  // Reset input to the last valid budget
        } else if (inputBudget >= totalExpenses) {
            setNewBudget(inputBudget);
        } else {
            // Optionally show alert or indication to the user
            alert("You cannot reduce the budget value lover than the total spending!");
            setNewBudget(budget);  // Reset input to the current valid budget
        }
    };
    
    const handleBudgetSubmit = () => {
        // Dispatch only if the check is redundant here but kept for safety
        if (newBudget >= expenses.reduce((sum, expense) => sum + expense.cost, 0)) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    };

    return (
<div className='alert alert-secondary'>
<span style={{ marginRight: '0.25rem' }}>Budget: {currency}</span>
{/* this code increase and decreacse it's value by 10 */}
<input 
    type="number"
    step="10"
    value={newBudget}
    onChange={handleBudgetChange}
    onBlur={handleBudgetSubmit} // Dispatch action when user leaves the input field
    />
</div>
    );
};
export default Budget;
