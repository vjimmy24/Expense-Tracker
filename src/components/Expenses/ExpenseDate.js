import "./ExpenseDate.css";
import ExpenseCard from "../UI/ExpenseCard";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <ExpenseCard className="expense-item-date">
      <div>{month}</div>
      <div className="date-day">
        <div>{day}</div>
      </div>
      <div>{year}</div>
    </ExpenseCard>
  );
};

export default ExpenseDate;
