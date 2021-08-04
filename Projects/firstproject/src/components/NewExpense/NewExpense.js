import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    // gathering information from a child component <ExpenseForm>


    const savedExpensesDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        // setShowForm(false);
    }
    
    const showTheForm = () => {
       setShowForm(true);
    }

    const hideTheform = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={showTheForm}>Add a new expense </button>}

            {showForm && <ExpenseForm  onSubmitFormData={savedExpensesDataHandler}  onCancel={hideTheform}/> }
            
           
           
        </div>
    );
};

export default NewExpense;