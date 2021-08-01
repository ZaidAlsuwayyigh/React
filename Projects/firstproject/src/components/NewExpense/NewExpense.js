import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    // gathering information from a child component <ExpenseForm>

    const savedExpensesDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm  onSubmitFormData={savedExpensesDataHandler}/>
        </div>
    );
};

export default NewExpense;