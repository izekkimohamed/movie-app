import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Percentage({ percent }) {
  const percentage = percent * 10
  function getColor(percentage) {
    let color = ''
    if (percentage >= 70) {
      color = '#4caf50'
    } else if (percentage >= 50) {
      color = '#ffc107'
    } else if (percentage >= 30) {
      color = '#ff9800'
    } else {
      color = '#f44336'
    }
    return color
  }
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage.toFixed(0)}%`}
      background
      styles={buildStyles({
        textSize: '32px',
        pathTransitionDuration: 0.5,
        pathColor: `${getColor(percentage)}`,
        textColor: `${getColor(percentage)}`,
        trailColor: 'rgba(0,0,0, 0.2)',
        strokeLinecap: 'round',
        backgroundColor: `${getColor(percentage)}91`
      })}
    />
  )
}

export default Percentage
