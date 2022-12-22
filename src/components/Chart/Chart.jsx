import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const dataPointsValues = props.dataPoints.map(dataPoint => parseFloat(String(dataPoint.value).replace(",",".")));
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={parseFloat(String(dataPoint.value).replace(",","."))}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
