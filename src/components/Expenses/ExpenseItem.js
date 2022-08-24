import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseCard from "../UI/ExpenseCard";

const ExpenseItem = (props) => {
  return (
    <li>
      <ExpenseCard className="expense-item">
        <div className="expense-item-description">
          <ExpenseDate date={props.date} />
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
      </ExpenseCard>
    </li>
  );
};

export default ExpenseItem;
