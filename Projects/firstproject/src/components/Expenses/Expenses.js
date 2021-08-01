import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

   /* --------------------------------------------------- */
    /*3- Start: third way to use if statement */
     // let expenseContent = <p style={{color: 'white'}}>No content for this year!</p>
    // if(filteredExpenses.length > 0){
    //     expenseContent =  filteredExpenses.map((expense) => (
    //         <ExpenseItem 
    //         key= {expense.id}
    //         title={expense.title} 
    //         amount={expense.amount} 
    //         date={expense.date} 
    //         />
    //         ));
    // };

    /*3- Start: third way to use if statement */
    /* --------------------------------------------------- */
    
    return (
        <div>
             
             <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
                 {/* --------------------------------------------------- */}
                {/*1-  Start: One way to use if statement */}
                {filteredExpenses.length > 0 ? filteredExpenses.map((expense) => (
                <ExpenseItem 
                key= {expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />
                )) :
                 <p style={{color: 'white'}}>No content for this {filteredYear}</p>
                }

                 {/*1- End:  One way to use if statement */}

                 {/* --------------------------------------------------- */}

                {/* --------------------------------------------------- */}
                 {/*2- Start: second way to use if statement */}

                {/* {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No content for this year!</p>}

                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem 
                key= {expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />
                ))} */}

                 {/*2- End: second way to use if statement */}
                 {/* --------------------------------------------------- */}

                {/* --------------------------------------------------- */}
                 {/*3- Start: third way to use if statement */}

                    {/* {expenseContent} */}

                 {/*3- End: second way to use if statement */}
                 {/* --------------------------------------------------- */}
             </Card>

        </div>
       
    );
}

export default Expenses;