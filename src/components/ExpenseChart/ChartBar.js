import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";
  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
