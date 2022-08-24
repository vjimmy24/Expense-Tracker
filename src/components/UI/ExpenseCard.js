import "./ExpenseCard.css";

const ExpenseCard = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ExpenseCard;
