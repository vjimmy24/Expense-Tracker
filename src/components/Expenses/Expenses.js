import React, { useState } from "react";
import ExpenseCard from "../UI/ExpenseCard";
import ExpensesFilter from "./ExpsensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ExpenseCard className="expenses">
      <ExpensesFilter
        selectedState={filteredYear}
        onChangeSelect={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </ExpenseCard>
  );
};

export default Expenses;
