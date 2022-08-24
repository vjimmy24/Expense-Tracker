import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="no-expense">No expenses found.</h2>;
  }
  return (
    <div>
      <ul className="expense-list">
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
