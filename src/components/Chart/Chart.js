import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar />
      ))}
    </div>
  )
}

export default Chart
