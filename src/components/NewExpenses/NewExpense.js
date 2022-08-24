import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isaddingExpense, setIsAddingExpense] = useState(false);
  const saveExpenseInputHandler = (enteredExpenseInput) => {
    const expenseData = {
      ...enteredExpenseInput,
      id: Math.random().toString(),
    };
    setIsAddingExpense(false);
    props.onAddExpense(expenseData);
  };
  const startAddingHandler = () => {
    setIsAddingExpense(true);
  };
  const stopAddingHandler = () => {
    setIsAddingExpense(false);
  };
  return (
    <div className="new-expense">
      {!isaddingExpense && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isaddingExpense && (
        <ExpenseForm
          onSaveExpenseInput={saveExpenseInputHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
