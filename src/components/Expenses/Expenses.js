/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
