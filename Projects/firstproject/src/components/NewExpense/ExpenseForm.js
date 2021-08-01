import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // this is one way to use useState
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // second way 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // second way:
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // better way:
        // if my state depends on my previous states, i will go with approach cuz React will give you te lastest state snapshot.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        //second way:
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        //better way:
        // if my state depends on my previous states, i will go with approach cuz React will give you te lastest state snapshot.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // second way: 
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        // better way:
        // if my state depends on my previous states, i will go with approach cuz React will give you te lastest state snapshot.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newEnteredExpenses = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSubmitFormData(newEnteredExpenses);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }


    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;